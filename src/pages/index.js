import React from 'react';
import Link from 'next/link';

const Index = () => (
  <>
    <h1>Hello world, my name is Jahir!</h1>
    <Link href={'/blog'}><a>Read my blog posts</a></Link>
  </>
);

export default Index;
