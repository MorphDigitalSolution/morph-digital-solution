export default function Widget() {
  return (
    <section className="py-16 bg-background">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary">Our Process</h2>
        <h3 className="text-4xl font-extrabold text-foreground">
          Process We Follow
        </h3>
        <p className="text-muted-foreground mt-4">
          Sint nascetur facere, delectus conubia consequuntur, nonummy
          distinctio! Non officiis, id natus non nisl provident justo.
        </p>
      </div>
      <div className="flex justify-center space-x-8">
        <div className="flex flex-col items-center">
          <div className="bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            01
          </div>
          <h4 className="mt-4 text-lg font-semibold">Research Project</h4>
          <p className="text-center text-muted-foreground">
            Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            02
          </div>
          <h4 className="mt-4 text-lg font-semibold">Evaluate Plans</h4>
          <p className="text-center text-muted-foreground">
            Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-secondary text-secondary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
            03
          </div>
          <h4 className="mt-4 text-lg font-semibold">Best Results</h4>
          <p className="text-center text-muted-foreground">
            Turpis wisi pede tempus assumenda pede quis ultricies dicta ipsa.
          </p>
        </div>
      </div>
    </section>
  );
}
