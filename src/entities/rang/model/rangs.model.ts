export enum Rang {
	TANOS = 'Танос',
	HULK = 'Халк',
	TORN = 'Тор',
	LEADER = 'Вождь',
	LIGHT_WARRIOR = 'Воин света',
	ELEMENTAL_MASTER = 'Повелитель стихии',
	PERSEUS = 'Персей',
	ENCHANTER = 'Заклинатель',
	BLADE_GUARDIAN = 'Хранитель клинков',
	KING = 'Король',
	DRAGON_LORD = 'Властелин Драконов',
	DRAGON = 'Дракон',
	MAG = 'Маг',
	KUNG_FU_MASTER = 'Мастер кунг-фу',
	HARDY_WARRIOR = 'Закаленный боец',
	FIGHTER = 'Боец',
	PEACEFUL = 'Мирный'
}

export const rangColors: Record<Rang, string> = {
	[Rang.TANOS]: '#A7A7A7',
	[Rang.HULK]: '#00AA00',
	[Rang.TORN]: '#ADF3FD',
	[Rang.LEADER]: '#00AAAA',
	[Rang.LIGHT_WARRIOR]: '#3dfffa',
	[Rang.ELEMENTAL_MASTER]: '#55FFFF',
	[Rang.PERSEUS]: '#FFFF55',
	[Rang.ENCHANTER]: '#FF5555',
	[Rang.BLADE_GUARDIAN]: '#FFAA00',
	[Rang.KING]: '#FFFF55',
	[Rang.DRAGON_LORD]: '#55FF55',
	[Rang.DRAGON]: '#5555FF',
	[Rang.MAG]: '#AA00AA',
	[Rang.KUNG_FU_MASTER]: '#00AAAA',
	[Rang.HARDY_WARRIOR]: '#55FFFF',
	[Rang.FIGHTER]: '#AAAAAA',
	[Rang.PEACEFUL]: '#FFFFFF'
} as const
