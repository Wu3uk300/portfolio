export const Loader = () => {
  return (
    <div className="relative w-10 h-10 animate-[spin_2.5s_linear_infinite]">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-full animate-[spin_2s_ease-in-out_infinite]"
          style={{ animationDelay: `-${1.1 - i * 0.1}s` }}
        >
          <div
            className="block w-1/4 h-1/4 bg-white rounded-full animate-[pulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: `-${1.1 - i * 0.1}s` }}
          />
        </div>
      ))}
    </div>
  );
};
