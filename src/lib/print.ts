export async function print(str: string) {
  const te = new TextEncoder();

  await Deno.stdout.write(te.encode(str));
}
