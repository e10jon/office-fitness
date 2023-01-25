export default function Page() {
  return (
    <div className='container mx-auto px-4'>
      <div className='text-3xl font-bold my-3'>Office Fitness</div>

      <section className='bg-slate-100 border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Intro section</div>
        <ol className='list-decimal	list-inside'>
          <li>Explanation of the site</li>
          <li>Goal of the site</li>
          <li>My background</li>
          <li>Why do this?</li>
        </ol>
      </section>

      <section className='bg-slate-100 border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Weightlifting section</div>
        <ol className='list-decimal	list-inside'>
          <li>Specific splits/routines</li>
          <li>Tutorial videos for each exercise</li>
          <li>Tips, like dropsets, warming up</li>
          <li>Clothing compatible with office</li>
        </ol>
      </section>

      <section className='bg-slate-100 border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Diet section</div>
        <ol className='list-decimal	list-inside'>
          <li>What to eat, how much</li>
          <li>How to avoid bloating, sensitivities</li>
          <li>Best takeout options</li>
          <li>How to eat at the office</li>
        </ol>
      </section>

      <section className='bg-slate-100 border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Cardio section</div>
        <ol className='list-decimal	list-inside'>
          <li>What to do, how much</li>
          <li>Avoiding sweat at the office</li>
          <li>Cardio with coworkers</li>
        </ol>
      </section>

      <section className='bg-slate-100 border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Supplements section</div>
        <ol className='list-decimal	list-inside'>
          <li>What to take</li>
          <li>What not to take</li>
          <li>How to take it at the office</li>
          <li>Where to buy it</li>
          <li>Testosterone, steroids</li>
        </ol>
      </section>

      <section className='bg-slate-100 border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Personal lifestyle section</div>
        <ol className='list-decimal	list-inside'>
          <li>Tips on alcohol, recreational drugs</li>
        </ol>
      </section>

      <section className='bg-slate-100 border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Work lifestyle section</div>
        <ol className='list-decimal	list-inside'>
          <li>How to achieve your goals and not be a weirdo</li>
          <li>Behavior around body commenting</li>
        </ol>
      </section>

      <section className='border p-3 my-4'>
        <div className='text-2xl font-bold mb-2'>Other ideas</div>
        <ol className='list-decimal	list-inside'>
          <li>Use Github feature requests for commenting</li>
          <li>Use Github for showing old versions of the site</li>
        </ol>
      </section>
    </div>
  )
}
