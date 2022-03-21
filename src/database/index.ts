import { createConnection, getConnectionOptions, Connection } from "typeorm";

// (async () => await createConnection())();
export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "development"
          ? "fin_api_test"
          : defaultOptions.database,
    })
  );
}
