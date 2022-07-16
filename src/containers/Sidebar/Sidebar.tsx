import { FC, useState, useCallback, FormEvent } from 'react';
import { useRouter } from 'next/router';

import { Input } from 'components/Input';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';

const Sidebar: FC<SidebarProps> = () => {

  const router = useRouter();
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    router.push(`/categories/${value}`);
    setValue('');
  }, [value, router]);

  return (
    <div className={s.container}>
      <h3 className={s.title}>
        Search
      </h3>
      <form className={s.form} onSubmit={onSubmit}>
        <Input
          value={value}
          onChange={onChange}
          placeholder="Enter the category..."
        />
      </form>
    </div>
  );
};

export {
  Sidebar,
};
