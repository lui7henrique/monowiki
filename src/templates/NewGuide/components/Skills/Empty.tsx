import { HeaderSkills } from './Header'

export const EmptySkills = () => {
  return (
    <section>
      <HeaderSkills />

      <div className="mt-4 flex flex-col gap-1">
        <div className="grid grid-cols-19 gap-1 w-full">
          <button
            className="bg-zinc-950 rounded-default aspect-square border border-zinc-800 cursor-pointer transition-all hover:opacity-50"
            type="button"
          />

          <div className="col-[_span_18] w-full border border-zinc-800 rounded-default bg-zinc-900 flex items-center justify-center uppercase font-bold text-zinc-600 text-sm select-none">
            Passiva
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div className="grid grid-cols-19 gap-1" key={index}>
                {Array.from({ length: 19 }).map((_, index) => {
                  return (
                    <button
                      className="bg-zinc-950 rounded-default aspect-square border border-zinc-800 cursor-pointer transition-all hover:opacity-50"
                      type="button"
                      key={index}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
