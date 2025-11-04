
export default function TestimonialCard({ quote, author, context }) {
  return (
    <div className="bg-card border-2 border-accent p-8 rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-accent text-4xl mb-4">"</div>
      <p className="text-card-foreground text-lg mb-4 italic leading-relaxed">{quote}</p>
      <div className="border-t border-accent pt-4">
        <p className="font-semibold text-accent">{author}</p>
        <p className="text-sm text-muted-foreground">{context}</p>
      </div>
    </div>
  )
}
