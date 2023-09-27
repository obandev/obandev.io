import geeklist from 'public/images/home/geeklist.jpg'
import delfino from 'public/images/home/delfino.jpg'
import quext from 'public/images/home/quext.jpg'
import ph from 'public/images/home/ph.jpg'
import blockmatic from 'public/images/home/blockmatic.jpg'
import nw from 'public/images/home/nw.jpg'

export default [
  {
    wrapperClass: 'relative w-[40%] h-40 mb-4',
    alt: 'quext',
    src: quext,
    imgClass: 'rounded-lg object-cover',
    href: 'https://onequext.com',
    sizes: '(max-width: 768px) 213px, 33vw',
  },
  {
    wrapperClass: 'relative w-[40%] h-40 sm:h-80 sm:mb-4',
    alt: 'delfino',
    src: delfino,
    imgClass: 'rounded-lg object-cover object-top sm:object-center',
    href: 'https://delfino.cr',
    sizes: '(max-width: 768px) 213px, 33vw',
  },
  {
    wrapperClass: 'relative w-[40%] h-80 mb-4 sm:mb-0',
    alt: 'parsley health',
    src: ph,
    imgClass: 'rounded-lg d-cover object-cover',
    href: 'https://parsleyhealth.com',
    sizes: '(max-width: 768px) 213px, 33vw',
  },
  {
    wrapperClass: 'relative w-[40%] h-40 mb-4 sm:mb-0',
    alt: 'nw',
    src: nw,
    imgClass: 'rounded-lg object-cover',
    href: 'https://nwideas.com',
    sizes: '(max-width: 768px) 213px, 33vw',
  },
  {
    wrapperClass: 'relative w-[40%] h-40 mb-4',
    alt: 'geeklist',
    src: geeklist,
    imgClass: 'rounded-lg object-cover',
    href: 'https://geekli.st/waitlist',
    sizes: '(max-width: 768px) 213px, 33vw',
  },
  {
    wrapperClass: 'relative w-[40%] h-80',
    alt: 'blockmatic',
    src: blockmatic,
    style: { top: '-160px' },
    imgClass: 'rounded-lg object-cover',
    href: 'https://blockmatic.io',
    sizes: '(max-width: 768px) 213px, 33vw',
  },
]
