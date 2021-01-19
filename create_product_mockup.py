import os
import time
import argparse
import numpy as np
import subprocess
import cv2
from PIL import Image

# Instantiate the argument parser object
ap = argparse.ArgumentParser()

# Add the arguments to the parser
ap.add_argument('-upsize8', '--upsize_8x', action='store_true',
	help='resize all images in mockup folder to 8x their current pixel width and height')

ap.add_argument('-squp', '--squarespace_upsize', action='store_true',
	help='')

ap.add_argument('-pm', '--place_mockup', action='store_true',
	help='place mockups on mockup')

ap.add_argument('-ba', '--before_after', action='store_true',
	help='place original side by side with styled i.e. before and after')

args = vars(ap.parse_args())
print(f'----- Arguments -----\n{args}\n')


# paths
ORIGINAL_IMAGE_FOLDER = 'img/inprogress/original/'
SHOWCASE_FOLDER = 'img/inprogress/showcase/'
MOCKUP_FOLDER = 'img/inprogress/mockup/'
BEFORE_IMAGE_FOLDER = 'img/inprogress/before/'
AFTER_IMAGE_FOLDER = 'img/inprogress/after/'


SQUARESPACE_PRODUCT_IMAGES = 'img/squarespace/product_images/self-portrait'

if args['upsize_8x']:
	for x in range (0,3):
		for filename in os.listdir(ORIGINAL_IMAGE_FOLDER):
			if 'aspect_ratio' not in filename:
				print(f'pass #{x} --- resizing styled file {filename} ')
				subprocess.run(['python', 'python2_image_enlarge.py',
					'--image_name', filename,
					'--source_folder', ORIGINAL_IMAGE_FOLDER,
					'--dest_folder', ORIGINAL_IMAGE_FOLDER], capture_output=True)

if args['squarespace_upsize']:
	for x in range (0,1):
		for filename in os.listdir(SQUARESPACE_PRODUCT_IMAGES):
			if '-styled-' in filename:
				print(f'pass #{x} --- resizing styled file {filename} ')
				subprocess.run(['python', 'python2_image_enlarge.py',
					'--image_name', filename,
					'--source_folder', SQUARESPACE_PRODUCT_IMAGES,
					'--dest_folder', SQUARESPACE_PRODUCT_IMAGES], capture_output=True)


if args['place_mockup']:
	for showcase_filename in os.listdir(SHOWCASE_FOLDER):

		showcase_template = Image.open(os.path.join(SHOWCASE_FOLDER, showcase_filename), 'r')
		final_img = Image.new('RGBA', (showcase_template.size[0],showcase_template.size[1]), (0, 0, 0, 0))
		final_img.paste(showcase_template, (0,0))

		if 'canvas' in showcase_filename:
			print('----canvas----')
			for mockup_filename in os.listdir(MOCKUP_FOLDER):
				mockup_img = Image.open(os.path.join(MOCKUP_FOLDER, mockup_filename), 'r')
				print(mockup_filename)
				if 'framed-canvas' in mockup_filename:
					x1 = final_img.size[0] - mockup_img.size[0]
					y1 = 0
					final_img.paste(mockup_img, (x1,y1))
				elif 'canvas' in mockup_filename:
					x1 = y1 = 0
					final_img.paste(mockup_img, (x1,y1))
				else:
					pass

		if 'poster' in showcase_filename:
			print('----poster----')
			for mockup_filename in os.listdir(MOCKUP_FOLDER):
				mockup_img = Image.open(os.path.join(MOCKUP_FOLDER, mockup_filename), 'r')
				print(mockup_filename)
				if 'framed-poster' in mockup_filename:
					x1 = final_img.size[0] - mockup_img.size[0]
					y1 = 0
					final_img.paste(mockup_img, (x1,y1))
				elif 'poster' in mockup_filename:
					x1 = y1 = 0
					final_img.paste(mockup_img, (x1,y1))
				else:
					pass

		final_img.save(os.path.join(SHOWCASE_FOLDER, showcase_filename), format="png")


if args['before_after']:

	before_files = []
	after_files = []

	for before_filename in sorted(os.listdir(BEFORE_IMAGE_FOLDER)):
		before_files.append(before_filename)

	for after_filename in sorted(os.listdir(AFTER_IMAGE_FOLDER)):
		after_files.append(after_filename)


	print(before_files)
	print(after_files)


	for index, before_files in enumerate(before_files):

		before_iamge = Image.open(os.path.join(BEFORE_IMAGE_FOLDER, before_files), 'r')
		after_image =  Image.open(os.path.join(AFTER_IMAGE_FOLDER, after_files[index]), 'r')
		final_img = Image.new('RGBA', ((before_iamge.size[0]*2),before_iamge.size[1]), (0, 0, 0, 0))
		final_img.paste(before_iamge, (0,0))
		final_img.paste(after_image, (before_iamge.size[0],0))
		final_img.save(os.path.join(SHOWCASE_FOLDER, after_files[index]), format="png")




# if args['squarespace_mockup']:

# 	before_files = []
# 	after_files = []

# 	for before_filename in sorted(os.listdir(BEFORE_IMAGE_FOLDER)):
# 		before_files.append(before_filename)

# 	for after_filename in sorted(os.listdir(AFTER_IMAGE_FOLDER)):
# 		after_files.append(after_filename)


# 	print(before_files)
# 	print(after_files)


# 	for index, before_name in enumerate(before_files):

# 		before_iamge = Image.open(os.path.join(BEFORE_IMAGE_FOLDER, before_name), 'r')
# 		after_image =  Image.open(os.path.join(AFTER_IMAGE_FOLDER, after_files[index]), 'r')
# 		final_img = Image.new('RGBA', ((before_iamge.size[0]*2),before_iamge.size[1]), (0, 0, 0, 0))
# 		final_img.paste(before_iamge, (0,0))
# 		final_img.paste(after_image, (before_iamge.size[0],0))
# 		final_img.save(os.path.join(SHOWCASE_FOLDER, before_name), format="png")