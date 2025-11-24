import { PriceFilter, RarityFilter, PropertiesFilter } from '@features/market-filters'

export const petConfig = {
    top: {
        search: true,
        sort: false,
        types: [
            {
                name: 'Transport',
                value: 'transport'
            },
            {
                name: 'Pet',
                value: 'pet'
            },
            {
                name: 'Egg',
                value: 'egg'
            },
            {
                name: 'Potion',
                value: 'potion'
            }
        ]
    },
    filters: [
        {
            component: PriceFilter
        },
        {
            component: RarityFilter,
            props: {
                options: [
                    {
                        name: 'Common',
                        value: 'common',
                        color: '#4891FF4D',
                        hoverColor: "#4891FF"
                    },
                    {
                        name: 'Uncommon',
                        value: 'uncommon',
                        color: '#7E10D44D',
                        hoverColor: "#7E10D4"
                    },
                    {
                        name: 'Rare',
                        value: 'rare',
                        color: '#40BB184D',
                        hoverColor: "#40BB18CC"
                    },
                    {
                        name: 'Ultra rare',
                        value: 'ultra_rare',
                        color: '#E51A2E4D',
                        hoverColor: "#E51A2ECC"
                    },
                    {
                        name: 'Epic',
                        value: 'legendary',
                        color: '#1E1E1E4D',
                        hoverColor: "#1E1E1E"
                    },
                ]
            }
        },
        {
            component: PropertiesFilter,
            props: {
                options: [
                    { value: 'default', label: 'Обычный', icon: '-', color: '#ccc' },
                    { value: 'neon', label: 'Неон', icon: 'N', color: '#5cb85c' },
                    { value: 'mega_neon', label: 'Мега-неон', icon: 'M', color: '#7b4ce3' },
                    { value: 'ride', label: 'Ездовой', icon: 'R', color: '#D41057' },
                    { value: 'fly', label: 'Флай', icon: 'F', color: '#5a82e3' },
                ]
            }
        }
    ]
}