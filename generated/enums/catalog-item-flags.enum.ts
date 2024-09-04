export enum ECatalogItemFlags {
	CATALOG_ITEM_FLAG_WALLET_ONLY = 1,
	CATALOG_ITEM_FLAG_BANK_ONLY,
	CATALOG_ITEM_FLAG_BANK_THEN_WALLET = 4,
	CATALOG_ITEM_FLAG_WALLET_THEN_BANK = 8,
	CATALOG_ITEM_FLAG_EVC_ONLY = 16,
	CATALOG_ITEM_FLAG_TOKEN = 32,
}