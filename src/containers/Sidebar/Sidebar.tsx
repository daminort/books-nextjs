import { FC, useState, useCallback, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'store';
import { recentActions, recentSelectors } from 'store/Recent';

import { Input } from 'components/Input';
import s from './Sidebar.module.css';

const Sidebar: FC = () => {

  const dispatch = useDispatch();
  const list = useSelector(recentSelectors.getList);

  const router = useRouter();
  const [value, setValue] = useState<string>('');

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    dispatch(recentActions.categoryAdd(value));
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
      <h3 className={s.subtitle}>
        Recent categories
      </h3>
      <nav>
        {list.map(category => {
          return (
            <Link href={`/categories/${category}`} key={category}>
              <div className={s.recent}>
                <a>{category}</a>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export {
  Sidebar,
};
