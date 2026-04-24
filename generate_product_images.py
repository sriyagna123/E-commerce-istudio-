from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

images = {
    'wireless-headphones': ('#1a73e8', 'Wireless', 'Headphones'),
    'smart-watch': ('#ff6f00', 'Smart', 'Watch'),
    'mechanical-keyboard': ('#2e7d32', 'Mechanical', 'Keyboard'),
    'webcam-1080p': ('#7c4dff', 'Webcam', '1080P'),
    'green-dress': ('#388e3c', 'Green', 'Dress'),
    'denim-jacket': ('#1565c0', 'Denim', 'Jacket'),
    'usb-c-hub': ('#00695c', 'USB-C', 'Hub'),
    'wireless-mouse': ('#ff5722', 'Wireless', 'Mouse'),
    'desk-lamp': ('#424242', 'Desk', 'Lamp'),
    'ergonomic-chair': ('#5d4037', 'Ergonomic', 'Chair')
}

outdir = Path('images/products')
outdir.mkdir(parents=True, exist_ok=True)
font = ImageFont.load_default()
for name, (bg, line1, line2) in images.items():
    img = Image.new('RGB', (800, 800), bg)
    draw = ImageDraw.Draw(img)
    w1, h1 = draw.textsize(line1, font=font)
    w2, h2 = draw.textsize(line2, font=font)
    draw.text(((800 - w1) / 2, 280), line1, fill='white', font=font)
    draw.text(((800 - w2) / 2, 360), line2, fill='white', font=font)
    img.save(outdir / f'{name}.png')
print('Generated', len(images), 'product images.')