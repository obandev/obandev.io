import geeklist from 'public/images/home/geeklist.jpg'
import delfino from 'public/images/home/delfino.jpg'
import quext from 'public/images/home/quext.jpg'
import ph from 'public/images/home/ph.jpg'
import blockmatic from 'public/images/home/blockmatic.jpg'
import nw from 'public/images/home/nw.jpg'

export default [
  {
    wrapperClass: 'relative h-40 max-w-full mb-4 bg-red-500',
    alt: 'quext',
    src: quext,
    sizes: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://onequext.com',
  },
  {
    wrapperClass: 'relative h-80  max-w-full mb-4 sm:mb-0  bg-red-500',
    alt: 'parsley health',
    src: ph,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://parsleyhealth.com',
  },
  {
    wrapperClass: 'relative h-40  max-w-full sm:h-80 sm:mb-4  bg-red-500',
    alt: 'delfino',
    src: delfino,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://delfino.cr',
  },
  {
    wrapperClass: 'relative h-40  max-w-full mb-4 sm:mb-0  bg-red-500',
    alt: 'nw',
    src: nw,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://nwideas.com',
  },
  {
    wrapperClass: 'relative h-40  max-w-full mb-4  bg-red-500',
    alt: 'geeklist',
    src: geeklist,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://geekli.st/waitlist',
  },
  {
    wrapperClass: 'relative h-80  max-w-full  bg-red-500',
    alt: 'blockmatic',
    src: blockmatic,
    size: '(min-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://blockmatic.io',
  },
]
