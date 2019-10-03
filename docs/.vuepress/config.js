module.exports = {
	title: '烈虎',
	description: '谦和，自信，求是',
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
			'/Code',
			{
				title: 'HTML',
				collapsable: true,
				children: [
					'/HTML/HTML-Base',
					'/HTML/HTML-Advance',
				]
			},{
				title: '设计模式',
				collapsable: true,
				children: [
					'/设计模式/Constructor',
					'/设计模式/Module',
				]
			},
			'/CSS',
			'/Vue',
			'/HTTP',
			'/SEO',
			'/Algorithm',
			'/Optimization',
			'/Other',
			'/WXAPP',
		],
		nav: [
			{ text: 'PCH1024', link: 'http://peichenhu.cn' },
			{ text: '日积月累', link: '/Guide' },
			{ text: 'Github', link: 'https://github.com/pch1024' },
		],
	},
};
