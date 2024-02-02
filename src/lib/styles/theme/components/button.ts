import type {ComponentStyleConfig} from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
    baseStyle: {
        _important: {
            fontSize: "2rem",

        }
    },
    variants: {
        main: {
            borderRadius: '10px',
            px: {base: "1.5rem", lg: "2.5rem"},
            py: {base: ".7rem", lg: "1.5rem"},
            bg: "primary.sub",
            color: "white",
            _hover: {
                bg: "primary.sub_",
            }
        },
        cta: {
            borderRadius: '10px',
            px: {base: "1.5rem", lg: "2.5rem"},
            py: {base: ".7rem", lg: "1.5rem"},
            bgGradient: 'linear(to-r, secondary.sub__, primary.sub)',
            color: "white",
            _hover: {
                bgGradient: 'linear(to-r, primary.sub, secondary.sub__)',
            }
        },
        sub: {
            borderRadius: '10px',
            px: {base: "1.5rem", lg: "2.5rem"},
            py: {base: ".63rem", lg: "1.43rem"},
            borderColor: "secondary.sub",
            borderWidth: ".14rem",
            color: "secondary.sub",
            // _hover: {
            //     borderColor: "secondary.sub_",
            //     color: "secondary.sub_",
            // }
        },
        aux: {
            p: 0,
            fontWeight: "bold",
            color: "gray.700",
            _hover: {
                color: "primary.sub__",
            }
        }
    },
    defaultProps: {
        variant: "main"
    }
};
