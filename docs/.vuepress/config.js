module.exports = {
	title: '前端面试指南',
	description: '好记性不如烂笔头',
	head: [['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]],
	configureWebpack: {
		resolve: {
			alias: {
				'@': '/assets/img',
			},
		},
	},
	themeConfig: {
		sidebar: [
			'/Guide',
			'/HTML',
			'/CSS',
			'/Vue',
			'/HTTP',
			'/SEO',
			'/Algorithm',
			'/Optimization',
			'/Other',
		],
		nav: [
			{ text: 'PCH1024', link: 'http://peichenhu.cn' },
			{ text: 'Article', link: '/Guide' },
			{ text: 'Github', link: 'https://github.com/pch1024' },
		],
	},
};
