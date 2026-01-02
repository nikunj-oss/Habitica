const Habbits = ({ data }) => {
  return (
    <div>
      {data?.map((e, index) => (
        <div key={index}>
          <h2>{e.HabbitName}</h2>

          {e.HabbitData?.map((hd, i) => (
            <div key={i}>
              <h3>{hd.date}</h3>
              <input
                type="checkbox"
                checked={hd.complete}
                readOnly
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export { Habbits };
