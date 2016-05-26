class PatientEntry < ApplicationRecord
  belongs_to :graph, optional: true
  belongs_to :entry, optional: true
end
