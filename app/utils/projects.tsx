import geeklist from 'public/images/home/geeklist.jpg'
import delfino from 'public/images/home/delfino.jpg'
import quext from 'public/images/home/quext.jpg'
import ph from 'public/images/home/ph.jpg'
import blockmatic from 'public/images/home/blockmatic.jpg'
import nw from 'public/images/home/nw.jpg'

export default [
  {
    wrapperClass: 'relative h-40 mb-4 bg-black',
    alt: 'quext',
    src: quext,
    sizes: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://onequext.com',
  },
  {
    wrapperClass: 'relative h-80 mb-4 sm:mb-0  bg-black',
    alt: 'parsley health',
    src: ph,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg d-cover object-cover',
    href: 'https://parsleyhealth.com',
  },
  {
    wrapperClass: 'relative h-40 sm:h-80 sm:mb-4  bg-black',
    alt: 'delfino',
    src: delfino,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover object-top sm:object-center',
    href: 'https://delfino.cr',
  },
  {
    wrapperClass: 'relative h-40 mb-4 sm:mb-0  bg-black',
    alt: 'nw',
    src: nw,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://nwideas.com',
  },
  {
    wrapperClass: 'relative h-40 mb-4  bg-black',
    alt: 'geeklist',
    src: geeklist,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://geekli.st/waitlist',
  },
  {
    wrapperClass: 'relative h-80  bg-black',
    alt: 'blockmatic',
    src: blockmatic,
    size: '(min-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://blockmatic.io',
  },
]
