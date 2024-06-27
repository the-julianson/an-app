import fs from 'fs';
import path from 'path';
import { FC } from 'react';


interface SomeServerComponentProps {
    pathname: string;
  }

const SomeServerComponent: FC<SomeServerComponentProps>  = async ({ pathname}) => {
    const filePath = path.join(process.cwd(), pathname);
    const text = fs.readFileSync(pathname, 'utf-8');
    return <div>{text}</div>;
}

export default SomeServerComponent;
