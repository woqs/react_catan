export interface ClickableItem {
    actions?: Array<string>
    disabled: boolean;
    owner?: string;
    id: number;
    isSelected: boolean;
}
