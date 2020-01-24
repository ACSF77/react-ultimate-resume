import React, { useCallback } from 'react';

import { FormattedMessage } from 'react-intl';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

const BasicsFrontComponent = ({ data }) => {
    const [side, setSide] = useCardSide();

    const {
        currentPosition,
        currentCity: { name: currentCityName }
    } = data;
    const handleButtonClick = useCallback(() =>
        setSide(side === 'front' ? 'back' : 'front'),
    [side, setSide]);

    return (
        <ProfileCardPaddedFront>
            <CenterContentContainer>
                <ProfileCardFrontTypography>
                    <FormattedMessage
                        id="Basics.Front.MainPhrase"
                        defaultMessage={'{currentPosition} based in {currentCity}'}
                        values={{ currentCity: currentCityName, currentPosition }}
                    />
                </ProfileCardFrontTypography>
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    More about me
                </ProfileCardButton>
            </ProfileCardActions>
        </ProfileCardPaddedFront>
    );
};

export const BasicsFront = BasicsFrontComponent;
