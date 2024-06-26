import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App">
        <h1 className="App__title">Static list of todos</h1>

        <section className="TodoList">
          <article className="TodoInfo TodoInfo--completed">
            <h2 className="TodoInfo__title">HTML</h2>

            <a className="UserInfo" href="mailto:Sincere@april.biz">
              Leanne Graham
            </a>
          </article>

          <article className="TodoInfo TodoInfo--completed">
            <h2 className="TodoInfo__title">CSS</h2>

            <a className="UserInfo" href="mailto:Sincere@april.biz">
              Leanne Graham
            </a>
          </article>

          <article className="TodoInfo TodoInfo--completed">
            <h2 className="TodoInfo__title">JS</h2>

            <a className="UserInfo" href="mailto:Shanna@melissa.tv">
              Ervin Howell
            </a>
          </article>

          <article className="TodoInfo">
            <h2 className="TodoInfo__title">React</h2>

            <a className="UserInfo" href="mailto:Nathan@yesenia.net">
              Clementine Bauch
            </a>
          </article>
        </section>
      </div>
    </main>
  )
}
