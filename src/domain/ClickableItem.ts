export interface ClickableItem {
    disabled: boolean;
    owner?: string;
    id: number;
    isSelected: boolean;
}

export interface VillageStatus extends ClickableItem {
    level: number;
}

export function isInstanceOfVillage(object: ClickableItem) {
    return 'level' in object
}
