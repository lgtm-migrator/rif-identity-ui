import { Dispatch } from 'redux';

import { createIdentityFactory } from 'jesse-rif-id-core/lib/operations/identity';
import { Callback } from 'jesse-rif-id-core/src/operations/identity';
import { agent, rifIdentityProvider } from '../../daf/dafSetup';
import { AbstractIdentity } from 'daf-core';
/**
 * Creates Identity
 * @param mnemonic string[] Mnemonic to create identity and save as JSON
 * @param callback function(err, res) Optional function to be called
 */
export const createRifIdentity = (mnemonic: string[], callback?: Callback<AbstractIdentity>) => (
  dispatch: Dispatch,
) => {
  const createIdentity = createIdentityFactory(agent);
  rifIdentityProvider
    .importMnemonic(mnemonic.join(' '))
    .then(() => dispatch(createIdentity(callback)));
};
