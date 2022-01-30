import type { NextPage } from 'next'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Nav from './Nav'

import styles from '../styles/Header.module.scss'

const Header: NextPage = () => {

  const professions = [
      'a Full Stack Software Dev',
      'an UI/UX Designer',
      'an Android Fanboy',
      'one of those javascript-can-do anything kinda guy',
  ]

  return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.introCard}>
                Hi I&apos;m Manish
                {/* {' '}
                <Typewriter
                    words={[
                        'Kumar Das',
                        '- the-halfbloodprince'
                    ]}
                    loop={false}
                /> */}
            </div>
            <div className={styles.professionCard}>
                I&apos;m{' '}
                <span>
                    <Typewriter
                        words={professions}
                        loop={false}
                    />
                </span>
            </div>
        </div>
  )
}

export default Header;
