class CreateStateRecividisms < ActiveRecord::Migration
  def change
    create_table :state_recividisms do |t|
      t.string :name
      t.decimal :pop_at_risk
      t.integer :returned_to_jail
      t.float :percent

      t.timestamps
    end
  end
end
