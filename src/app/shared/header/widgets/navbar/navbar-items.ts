// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  image?: string;
  children?: Menu[];
}
/*

category: id, name, filters, value
filters: size,type,refresh_rate,response_time,sdf,d,dfs,d,
value: 24,28,32,...;lcd,led,qled,oled

*/


export const MENUITEMS: Menu[] = [
	{
		title: 'home', type: 'link', path: '/'
	},
	{
		title: 'products', type: 'link', path: '/products'
	},
  {
    title: 'categories', type: 'link', path: '/categories', megaMenu: true, megaMenuType: 'large', children: [
      {
        title: 'mens-fashion',  type: 'link', children: [
          { path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'top',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'bottom',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'shirts',  type: 'link' }
        ]
      },
      {
        title: 'women-fashion',  type: 'link', children: [
          { path: '/home/left-sidebar/collection/all', title: 'dresses',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'skirts',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'westarn-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'bottom-wear',  type: 'link' }
        ]
      },
      {
        title: 'kids-fashion',  type: 'link', children: [
          { path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'sports-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'top',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'bottom-wear',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'ethic-wear',  type: 'link' }
        ]
      },
      {
        title: 'accessories',  type: 'link', children: [
          { path: '/home/left-sidebar/collection/all', title: 'fashion-jewellery',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'caps-and-hats',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'precious-jewellery',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'necklaces',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'earrings',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'rings-wrist-wear',  type: 'link' }
        ]
      },
      {
        title: 'men-accessories',  type: 'link', children: [
          { path: '/home/left-sidebar/collection/all', title: 'ties',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'cufflinks',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'pockets-squares',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'helmets',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'scarves',  type: 'link' },
          { path: '/home/left-sidebar/collection/all', title: 'phone-cases',  type: 'link' }
        ]
      },
    ]
  },
  {
		title: 'shops', path: '/shops', type: 'link', children: [
	      { path: '/404', title: '404', type: 'link'},
	      { path: '/lookbook', title: 'lookbook', type: 'link' },
	      { path: '/search', title: 'search', type: 'link' },
	      { path: '/wishlist', title: 'wishlist', type: 'link' },
	      { path: '/cart', title: 'cart', type: 'link' },
	      { path: '/collection', title: 'collection', type: 'link' },
	      { path: '/forgetpassword', title: 'forget-password', type: 'link' },
	      { path: '/checkout', title: 'checkout', type: 'link' },
	      { path: '/compare', title: 'compare', type: 'link' },
	      { path: '/order-success', title: 'order-success', type: 'link' },
	      { path: '/dashboard', title: 'dashboard', type: 'link' },
	    ]
	},
  {
    title: 'contact us', path: '/contact', type: 'link'
  },
  {
    title: 'about us', path: '/about', type: 'link'
  },
  {
    title: 'faq', path: '/faq', type: 'link'
  }

]
