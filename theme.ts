



export type Theme = {
    colors: {
        black: string;
        darkGrey: string;
        lines: string;
        medGray: string;
        lightGray: string;
        mainPurple: string;
        mainPurpleHover: string;
        red: string;
        redHover: string;
        todo: string;
        doing: string;
        done: string;
    };
    weight: {
        regular: string;
        bold: string;
        extrabold: string; 
    };
    fontSize: {
        24: string;
        18: string;
        15: string;
        13: string;
        12: string;
    };
    lineHeight: {
        30: string;
        23: string;
        18: string;
        15: string;
    };

    letterSpacing: {
        spread: string;
    };

}; 

export const lightTheme = {
    colors: {
        black: "#000112",
        darkGrey: "#2B2C37",
        lines: "#E4EBFA",
        medGray: "#828FA3",
        lightGray: "#F4F7FD",
        mainPurple: "#635FC7",
        mainPurpleHover: "#A8A4FF",
        red: "#EA5555",
        redHover: "#FF9898",
        todo: "#49C4E5",
        doing: "#8471F2",
        done: "#67E2AE",
    },
    weight: {
        regular: '500',
        bold: '700',
        extrabold: '800',
       
    },
    fontSize: {
        24: "24px",
        18: "18px",
        15: "15px",
        13: "13px",
        12: "12px",
    },

    lineHeight: {
        30: "30px",
        23: "23px",
        18: "19px",
        15: "15px",
    },

    letterSpacing: {
        spread: "2.4px",
    }
  
}


export function colors(name: keyof Theme["colors"]) {
    return ({ lightTheme }: { lightTheme: Theme }) => lightTheme.colors[name];
  }

  export function weight(name: keyof Theme["weight"]) {
    return ({ lightTheme }: { lightTheme: Theme }) => lightTheme.weight[name];
  }

  export function fontSize(name: keyof Theme["fontSize"]) {
    return ({lightTheme}: {lightTheme: Theme}) => lightTheme.fontSize[name]; 
  }