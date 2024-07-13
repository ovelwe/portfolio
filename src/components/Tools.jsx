import React from 'react'

const Tools = () => {
  return (
    <div className='w-full flex flex-col items-center gap-[70px]'>
      <h2 className='xl:text-[40px] md:text-[32px] msm:text-[28px] msm:text-center'><span className='text-blue'>Технологии</span> которые я использую</h2>
      <ul className='flex flex-row flex-wrap gap-x-[50px] xl:mb-[20px] xl:text-[36px] justify-center'>
        <li><a href="https://react.dev/">React</a></li>
        <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
        <li><a href="https://go.dev/">Golang</a></li>
        <li><a href="https://tailwindcss.com/">TailWindCSS</a></li>
        <li><a href="https://redux.js.org/">Redux</a></li>
        <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
        <li><a href="https://nginx.org/ru/">Nginx</a></li>
        <li><a href="https://httpd.apache.org/">Apache</a></li>
        <li><a href="https://memcached.org/">Memcached</a></li>
        <li><a href="https://www.php.net/">PHP</a></li>
        <li><a href="https://kafka.apache.org/">Kafka</a></li>
        <li><a href="https://www.docker.com/">Doker</a></li>
        <li><a href="https://gin-gonic.com/">Gin</a></li>
      </ul>
    </div>
  )
}

export default Tools