// @flow

import matchUserPreference from '@magica11y/match-user-preference';

import availableDisplayBlends, { type DisplayBlend } from './availableDisplayBlends';

const displayBlendValues: Array<DisplayBlend> = [
  availableDisplayBlends.OPAQUE,
  availableDisplayBlends.ADDITIVE,
  availableDisplayBlends.SUBTRACTIVE,
];

/**
 * Detects the characteristics of the user’s display
 * using CSS3 Media Queries level 5 specification for `'environment-blending'`.
 *
 * @returns Either 'opaque', 'additive', 'subtractive' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#environment-blending
 */
const environmentBlending = (): ?DisplayBlend => {
  const matchedDisplayBlend: ?DisplayBlend = displayBlendValues.find((displayBlendValue: DisplayBlend) =>
    matchUserPreference('environment-blending', displayBlendValue),
  );

  if (matchedDisplayBlend) {
    return matchedDisplayBlend;
  }

  return null;
};

export default environmentBlending;
