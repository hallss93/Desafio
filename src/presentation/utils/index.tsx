import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const getInitials = (name: string) => {
  const initials = [] as string[];
  const nameSplited = name.split(' ');
  nameSplited.forEach((nameSplited, index) => {
    initials.push(nameSplited[0]);
  });
  if (initials.length > 2) {
    return initials[0] + initials[initials.length - 1];
  }
  return initials.join('');
};
