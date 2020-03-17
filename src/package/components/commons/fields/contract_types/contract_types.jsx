import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import translations from './contract_types_translations';

export const ContractType = ({ contractTypes = [] }) => {
    const { formatMessage } = useIntl();

    const contracts = [...contractTypes];
    const lastContract = contracts.pop();
    if (!lastContract) {
        return null;
    }
    if (!contracts.length) {
        return (
            <FormattedMessage
                id="Basics.Back.WorkContract.single"
                defaultMessage={'Looking for a {contractType} contract'}
                values={{ contractType: formatMessage(translations[lastContract]) }}
            />
        );
    }
    return (
        <FormattedMessage
            id="Basics.Back.WorkContract.multi"
            defaultMessage={'Looking for a {contracts} or {lastContract} contract'}
            values={{ lastContract, contracts: contracts.join(', ') }}
        />
    );
};
