import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase, isSupabaseConfigured } from '../Nuel-folio ux_ui-portfolio/src/supabase';

/**
 * AboutThumnails Component
 * 
 * Fetches and displays images from Supabase storage bucket 'projects/about-thumbnails/'
 * in a horizontal scrolling gallery format.
 */
export const AboutThumnails: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to check if an item is a file (not a folder)
  const isFile = (item: any): boolean => {
    // In Supabase storage, folders typically don't have these properties
    // Files will have metadata, id, or updated_at
    return !!(item.metadata || item.id || (item.updated_at && !item.name.endsWith('/')));
  };

  // Helper function to recursively fetch all images from a storage folder
  const fetchAllImagesFromFolder = async (folderPath: string): Promise<string[]> => {
    const allImages: string[] = [];
    console.log(`[AboutThumnails] Attempting to fetch from folder: "${folderPath}"`);

    const listRecursive = async (path: string): Promise<void> => {
      try {
        console.log(`[AboutThumnails] Listing path: "${path}"`);
        const { data: items, error } = await supabase!.storage
          .from('projects')
          .list(path, {
            limit: 1000,
            sortBy: { column: 'name', order: 'asc' },
          });

        if (error) {
          console.error(`[AboutThumnails] Error listing "${path}":`, error);
          // If folder doesn't exist or error, return empty array
          if (!error.message.includes('not found')) {
            console.warn(`[AboutThumnails] Error listing ${path}:`, error.message);
          }
          return;
        }

        if (!items || items.length === 0) {
          console.log(`[AboutThumnails] No items found in path: "${path}"`);
          return;
        }

        console.log(`[AboutThumnails] Found ${items.length} items in "${path}"`);

        for (const item of items) {
          const itemPath = path ? `${path}/${item.name}` : item.name;
          console.log(`[AboutThumnails] Processing item: "${item.name}" (path: "${itemPath}")`);

          // Check if it's a file or folder
          // Files have metadata or id, folders typically don't
          if (isFile(item)) {
            // It's a file - check if it's an image
            const fileName = item.name.toLowerCase();
            const isImage =
              fileName.endsWith('.jpg') ||
              fileName.endsWith('.jpeg') ||
              fileName.endsWith('.png') ||
              fileName.endsWith('.gif') ||
              fileName.endsWith('.webp') ||
              fileName.endsWith('.svg');

            if (isImage) {
              const { data } = supabase!.storage
                .from('projects')
                .getPublicUrl(itemPath);
              console.log(`[AboutThumnails] Added image: ${data.publicUrl}`);
              allImages.push(data.publicUrl);
            }
          } else {
            // It's a folder - recurse into it (only if path is explicitly a folder path)
            if (!item.name.includes('.')) {
              console.log(`[AboutThumnails] Recursing into folder: "${itemPath}"`);
              await listRecursive(itemPath);
            }
          }
        }
      } catch (err: any) {
        console.error(`[AboutThumnails] Error processing folder "${path}":`, err);
      }
    };

    await listRecursive(folderPath);

    console.log(`[AboutThumnails] Total images found: ${allImages.length}`);

    // Sort images to prioritize numbered files (01.jpg, 1.jpg, etc.)
    return allImages.sort((a, b) => {
      const aName = a.split('/').pop()?.toLowerCase() || '';
      const bName = b.split('/').pop()?.toLowerCase() || '';

      // Extract numbers from filenames
      const aNum = parseInt(aName.match(/^0?(\d+)/)?.[1] || '999');
      const bNum = parseInt(bName.match(/^0?(\d+)/)?.[1] || '999');

      // If both have numbers, sort by number
      if (!isNaN(aNum) && !isNaN(bNum) && aNum !== 999 && bNum !== 999) {
        return aNum - bNum;
      }

      // Otherwise sort alphabetically
      return aName.localeCompare(bName);
    });
  };

  useEffect(() => {
    const loadImages = async () => {
      if (!isSupabaseConfigured || !supabase) {
        setError('Supabase is not configured');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Fetch from the about-thumbnails folder
        const folderName = 'about-thumbnails';
        console.log(`[AboutThumnails] Fetching from folder: "${folderName}"`);
        console.log(`[AboutThumnails] Full path: projects/${folderName}/`);
        const fetchedImages = await fetchAllImagesFromFolder(folderName);

        if (fetchedImages.length > 0) {
          console.log(`[AboutThumnails] Successfully found ${fetchedImages.length} images in folder: "${folderName}"`);
          setImages(fetchedImages);
        } else {
          const errorMsg = `No images found in ${folderName} folder. Please verify the folder exists in Supabase Storage at 'projects/${folderName}/'.`;
          console.error('[AboutThumnails]', errorMsg);
          setError(errorMsg);
        }
      } catch (err: any) {
        console.error('[AboutThumnails] Error fetching thumbnail images:', err);
        setError(err.message || 'Failed to load images');
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // If loading, show loading state
  if (loading) {
    return (
      <section className="py-6 sm:py-8 md:py-10 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
            Views Our Thumnail
          </h2>
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-neon-primary border-t-transparent mb-4"></div>
              <p className="text-slate-400 text-sm">Loading thumbnails...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If error, show error state
  if (error || images.length === 0) {
    return (
      <section className="py-6 sm:py-8 md:py-10 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
            Views Our Thumnail
          </h2>
          <div className="flex items-center justify-center py-12">
            <p className="text-slate-400 text-sm">
              {error || 'No thumbnails available'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 sm:py-8 md:py-10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
          Views Our Thumnail
        </h2>
      </div>

      {/* Horizontal Infinite Auto-Scrolling Marquee with Original Aspect Ratio */}
      <div
        className="relative w-full overflow-x-auto overflow-y-hidden"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style>{`
          .thumbnail-marquee-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <motion.div
          className="flex thumbnail-marquee-container"
          style={{
            width: 'fit-content',
            gap: '3px',
          }}
          animate={{
            x: [0, '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {/* First set of images */}
          <div className="flex" style={{ gap: '3px' }}>
            {images.map((imageUrl, index) => (
              <div
                key={`thumbnail-1-${index}`}
                className="flex-shrink-0 h-[250px]"
                style={{
                  width: 'auto',
                  background: 'transparent',
                }}
              >
                <img
                  src={imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-auto object-contain"
                  style={{
                    borderRadius: '0',
                    background: 'transparent',
                    display: 'block',
                  }}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${imageUrl}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex" style={{ gap: '3px' }}>
            {images.map((imageUrl, index) => (
              <div
                key={`thumbnail-2-${index}`}
                className="flex-shrink-0 h-[250px]"
                style={{
                  width: 'auto',
                  background: 'transparent',
                }}
              >
                <img
                  src={imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-auto object-contain"
                  style={{
                    borderRadius: '0',
                    background: 'transparent',
                    display: 'block',
                  }}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${imageUrl}`);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
