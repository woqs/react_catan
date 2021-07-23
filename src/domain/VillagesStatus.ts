export interface VillageStatus {
    level?: number;
    owner?: string;
    disabled: boolean;
}

export function initiateVillagesStatus()
{
    const initialVilagesStatuses = Array<VillageStatus>()
    while (initialVilagesStatuses.length < 55) {
        initialVilagesStatuses.push({disabled: false})
    }
    return initialVilagesStatuses
}

const villagesAround = [
    [1,8],
    [0,2],
    [1,3,10],
    [2,4],
    [3,5,12],
    [4,6],
    [5,14],
    [8,17],
    [0,7,9],
    [8,10,19],
    [2,9,11],
    [10,12,21],
    [4,11,13],
    [12,14,23],
    [6,13,15],
    [14,25],
    [17,27],
    [7,16,18],
    [17,19,29],
    [9,18,20],
    [19,21,31],
    [11,20,22],
    [21,23,33],
    [13,22,24],
    [23,25,35],
    [15,24,26],
    [25,37],
    [16,28],
    [27,29,38],
    [18,28,30],
    [29,31,40],
    [20,30,32],
    [31,33,42],
    [22,32,34],
    [33,35,44],
    [24,34,36],
    [35,37,45],
    [26,36],
    [28,39],
    [38,40,47],
    [30,39,41],
    [40,42,49],
    [32,41,43],
    [42,44,51],
    [34,43,45],
    [44,46,53],
    [36,45],
    [39,48],
    [47,49],
    [41,48,50],
    [49,51],
    [43,50,52],
    [51,53],
    [45,52],
]

export function getArroundVillagesIds(id: number)
{
    return villagesAround[id]
}
