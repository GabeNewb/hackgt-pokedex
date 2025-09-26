export const getPokemonTypeColor = (type?: string): string => {
    switch (type) {
        case 'bug':
            return '#8cb230';
        case 'dark':
            return '#58575f';
        case 'dragon':
            return '#0f6ac0';
        case 'electric':
            return '#eed535';
        case 'fairy':
            return '#ed6ec7';
        case 'fighting':
            return '#d04164';
        case 'fire':
            return '#fd7d24';
        case 'flying':
            return '#748fc9';
        case 'ghost':
            return '#556aae';
        case 'grass':
            return '#62b957';
        case 'ground':
            return '#dd7748';
        case 'ice':
            return '#61cec0';
        case 'normal':
            return '#9da0aa';
        case 'poison':
            return '#a552cc';
        case 'psychic':
            return '#ea5d60';
        case 'rock':
            return '#baab82';
        case 'steel':
            return '#417d9a';
        case 'water':
            return '#4a90da';
        default:
            return '#000';
    }
}
