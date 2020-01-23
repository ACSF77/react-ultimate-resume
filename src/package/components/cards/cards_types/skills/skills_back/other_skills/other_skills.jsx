import React, { useMemo } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { animated } from 'react-spring';
import { interpolate } from 'react-spring';

import { Typography } from '@wld/ui/typography/typography';

import OtherSkillProgress from '../other_skill_progress/other_skill_progress';
import { getColorsFromCardVariant } from '../../../../../../utils/styles/styles_utils';

import { styles } from './other_skills_styles';

const useStyles = createUseStyles(styles);

const OtherSkills = ({ variant, othersSkills, springOnOpenOpacityProps, springTranslationProps: { yt } }) => {
    const classes = useStyles({ cardVariant: variant });
    const theme = useTheme();
    const mainColor = useMemo(() => getColorsFromCardVariant(theme, variant).color, [theme, variant]);

    return (
        <animated.div
            className={classes.otherSkillsContainer}
            style={{
                opacity: springOnOpenOpacityProps.opacity,
                transform: interpolate([yt], (yt) => `translate3d(0, ${yt}px,0)`)
            }}
        >
            <Typography
                variant="h3"
                component="h3"
                customClasses={{ container: classes.otherSkillsTitle }}
                color={mainColor}
            >
                {'Je maitrise également...'}
            </Typography>
            {othersSkills.map(skill => <OtherSkillProgress variant={variant} {...skill} />)}
        </animated.div>
    );
};

export default OtherSkills;
