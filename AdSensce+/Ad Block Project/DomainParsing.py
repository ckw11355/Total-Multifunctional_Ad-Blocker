file_in = open("DomainMuteLists_V1.txt", "r")
file_out = open("AdSensce_defaultFilters.js", "w")

line = file_in.readline()
file_out.write("var defaultFilters = [\n")

first = True
while(line):
    if("[" not in line):
        if not first:
             file_out.write(",\n")
        first = False
        line = (line.lstrip("||")).rstrip("^\n")
        parsed_line = "*://*." + line + "/*"
        file_out.write("\"" + parsed_line + "\"")
    line = file_in.readline()
file_out.write("]")
file_out.close()
file_in.close()