## Alter database, tables character set

```mysql
ALTER DATABASE <database_name> CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS=0;

SELECT CONCAT("ALTER TABLE `", table_name, "` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;") AS mysql
FROM information_schema.tables
WHERE table_schema="<database_name>" AND table_type="base table";

SET FOREIGN_KEY_CHECKS=1;
```

## Check if command exists

```bash
if [[ ! -x "$(command -v $CMD)" ]]; then
	echo "$CMD could not be found"
	exit
fi
```

## Update foreign key

```sql
ALTER TABLE x DROP CONSTRAINT fk;

ALTER TABLE x ADD CONSTRAINT fk FOREIGN KEY (user_id) 
REFERENCES another_table(id) ON DELETE CASCADE ON UPDATE NO ACTION;
```

## Supabase policy

```
CREATE POLICY "Enable insert for authenticated users only" ON "public"."labels"

AS PERMISSIVE FOR INSERT

TO authenticated

WITH CHECK (true)
```

```
CREATE POLICY "Users can read their own labels" ON "public"."labels"

AS PERMISSIVE FOR SELECT

TO public

USING ((auth.uid() = user_id))
```

```
CREATE POLICY "Users can delete their own checklists" ON "public"."labels"

AS PERMISSIVE FOR DELETE

TO public

USING (auth.uid() = user_id)
```

```
CREATE POLICY "Users can update their own labels" ON "public"."labels"

AS PERMISSIVE FOR UPDATE

TO public

USING (auth.uid() = user_id)
```