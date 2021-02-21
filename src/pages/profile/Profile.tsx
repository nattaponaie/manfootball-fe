import React, { FunctionComponent } from 'react';

import { LineProps } from '../../LineAuth';

export interface ProfileProps {
  lineAuth: LineProps;
};

const Profile: FunctionComponent<ProfileProps> = (props: ProfileProps) => {
  console.log('props', props);
  
  return (
    <>
      Profile {props.lineAuth.isLoggedIn}
    </>
  )
}

export default Profile;
