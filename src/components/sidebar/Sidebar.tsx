import { LogoutButton } from './LogoutButton';
import { MenuItem } from './MenuItem';
import { MENU } from './menu.data';

export function Sidebar() {
  return (
    <div>
      <LogoutButton />
      {MENU.map(item => (
        <MenuItem item={item} key={item.link} />
      ))}
    </div>
  );
}
