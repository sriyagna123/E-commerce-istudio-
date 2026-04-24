import zlib
from pathlib import Path
from struct import pack

products = {
    'wireless-headphones': '#1a73e8',
    'smart-watch': '#ff6f00',
    'mechanical-keyboard': '#2e7d32',
    'webcam-1080p': '#7c4dff',
    'green-dress': '#388e3c',
    'denim-jacket': '#1565c0',
    'usb-c-hub': '#00695c',
    'wireless-mouse': '#ff5722',
    'desk-lamp': '#424242',
    'ergonomic-chair': '#5d4037'
}

outdir = Path('images/products')
outdir.mkdir(parents=True, exist_ok=True)


def rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def make_png(path, color):
    width, height = 800, 800
    r, g, b = rgb(color)
    rows = []
    for y in range(height):
        row = bytearray()
        row.append(0)
        t = y / height
        rr = int(r * (0.8 + 0.2 * t))
        gg = int(g * (0.8 + 0.2 * t))
        bb = int(b * (0.8 + 0.2 * t))
        for x in range(width):
            row.extend((rr, gg, bb))
        rows.append(row)
    data = zlib.compress(b''.join(rows), level=9)
    with path.open('wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        f.write(pack('>I', 13))
        f.write(b'IHDR')
        f.write(pack('>I', width))
        f.write(pack('>I', height))
        f.write(b'\x08\x02\x00\x00\x00')
        f.write(pack('>I', zlib.crc32(b'IHDR' + pack('>I', width) + pack('>I', height) + b'\x08\x02\x00\x00\x00') & 0xffffffff))
        f.write(pack('>I', len(data)))
        f.write(b'IDAT')
        f.write(data)
        f.write(pack('>I', zlib.crc32(b'IDAT' + data) & 0xffffffff))
        f.write(pack('>I', 0))
        f.write(b'IEND')
        f.write(pack('>I', zlib.crc32(b'IEND') & 0xffffffff))


for key, color in products.items():
    make_png(outdir / f'{key}.png', color)
print('Generated', len(products), 'PNG product images.')