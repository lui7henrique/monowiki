export const EmptySkills = () => {
  return (
    <section>
      <h3>Skills</h3>

      <div className="mt-4 flex flex-col gap-1">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div className="grid grid-cols-19 gap-1" key={index}>
              {Array.from({ length: 19 }).map((_, index) => {
                return (
                  <button
                    className="bg-zinc-950 rounded-md aspect-square border border-zinc-800 cursor-pointer transition-all hover:opacity-50"
                    type="button"
                    key={index}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}
