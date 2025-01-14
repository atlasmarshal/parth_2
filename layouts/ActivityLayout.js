import { PageSEO } from '@/components/SEO'

export default function ActivityLayout({ children, frontMatter }) {
  const { name } = frontMatter
  return (
    <>
      <PageSEO title={`Activity - ${name}`} description={`My activities`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            <span role="img" className="mr-3" aria-label="wave">
              🌊
            </span>
            Activity
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">List my activity.</p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose prose-lg max-w-none pb-8 dark:prose-dark xl:col-span-3">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
