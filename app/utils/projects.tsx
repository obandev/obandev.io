import geeklist from 'public/images/home/geeklist.jpg'
import delfino from 'public/images/home/delfino.jpg'
import quext from 'public/images/home/quext.jpg'
import ph from 'public/images/home/ph.jpg'
import blockmatic from 'public/images/home/blockmatic.jpg'
import nw from 'public/images/home/nw.jpg'

export default [
  {
    wrapperClass: 'relative h-40 mb-4',
    alt: 'quext',
    src: quext,
    sizes: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://onequext.com',
  },
  {
    wrapperClass: 'relative h-80 mb-4 sm:mb-0',
    alt: 'parsley health',
    src: ph,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg d-cover object-cover',
    href: 'https://parsleyhealth.com',
    aClass: 'order-3',
  },
  {
    wrapperClass: 'relative h-40 sm:h-80 sm:mb-4',
    alt: 'delfino',
    src: delfino,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover object-top sm:object-center',
    href: 'https://delfino.cr',
    aClass: 'order-5',
  },
  {
    wrapperClass: 'relative h-40 mb-4 sm:mb-0',
    alt: 'nw',
    src: nw,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://nwideas.com',
    aClass: 'order-2',
  },
  {
    wrapperClass: 'relative h-40 mb-4',
    alt: 'geeklist',
    src: geeklist,
    size: '(max-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover',
    href: 'https://geekli.st/waitlist',
    aClass: 'order-4',
  },
  {
    wrapperClass: 'relative h-80',
    alt: 'blockmatic',
    src: blockmatic,
    size: '(min-width: 768px) 213px, 33vw',
    imgClass: 'rounded-lg object-cover !-top-40 sm:!top-0',
    href: 'https://blockmatic.io',
    aClass: 'order-6',
  },
]
