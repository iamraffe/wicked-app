class UricAcid < Graph
  def self.keys
    ["URIC ACID"]
  end

  def self.parse_entries(entry_params)
    parsed_entries = Array.new
    entry_params["date"].each do |i,v|
      parsed_entries.push({symbol: "URIC ACID", date: v.to_time.strftime("%b %Y"), value: entry_params["uric_acid"]["#{i}"].to_i})
    end
    parsed_entries
  end
end
