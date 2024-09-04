export enum ETextComponentTimeFormat {
	TIME_FORMAT_MILLISECONDS = 1,
	TIME_FORMAT_SECONDS,
	TIME_FORMAT_MINUTES = 4,
	TIME_FORMAT_HOURS = 8,
	TIME_FORMAT_DAYS = 16,
	TEXT_FORMAT_HIDE_LEADING_UNITS_EQUAL_TO_ZERO = 32,
	TEXT_FORMAT_HIDE_LEADING_ZEROS_ON_LEADING_UNITS = 64,
	TEXT_FORMAT_SHOW_UNIT_DIVIDERS_AS_LETTERS = 128,
	TEXT_FORMAT_HIDE_UNIT_LETTER_FOR_SMALLEST_UNITS = 256,
	TEXT_FORMAT_HIDE_MILLISECONDS_UNITS_DIGIT = 512,
	TEXT_FORMAT_HIDE_MILLISECONDS_TENS_DIGIT = 1024,
	TEXT_FORMAT_USE_DOT_FOR_MILLISECOND_DIVIDER = 2048,
}